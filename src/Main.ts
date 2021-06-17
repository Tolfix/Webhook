import Express from "express"
import { Body, GithubEvents } from "./Interfaces/Body";
import Options from "./Interfaces/Options";
import event from "events";


/**
 * @description Spins up a http server which listens on a POST request
 * @default endpoint = "/webhook"
 */
export default class SimpleWebhook
{
    protected Port: number;
    protected Secret: string | null;
    protected app;
    protected Event = new event.EventEmitter();

    constructor(Port: number, options?: Options)
    {
        this.Port = Port
        /**
         * @Tolfx
         * Something to look at?
         */
        this.Secret = options?.secret ?? null;
        this.app = Express();
        this.app.use(Express.json())
        this.app.use(Express.urlencoded({ extended: true }));
        this.app.post(options?.endpoint ?? "/webhook", (req, res) => {
            const body: Body = req.body
            // Reserve for later?
            const event = req.headers["x-github-event"];

            this.Event.emit("listen", {body,event});
            
            return res.sendStatus(200);
        });

        this.app.listen(Port);
    }

    /**
     * 
     * @param response 
     * @description Listens on the endpoint and respons when github send something
     */
    public listen<K extends keyof GithubEvents>(
        event: K, 
        response: (res: GithubEvents[K]) => void
    )
    {
        this.Event.on("listen", (resp) => {
            const data = resp.body;
            const e_event: string = resp.event;

            // To prevent missleading data leaking in..
            if(event === e_event)
                return response(data);

            // If you so desire it.
            else if(event === "everything")
                return response(data);
                
            
            // return response(data);
        });
    }
}