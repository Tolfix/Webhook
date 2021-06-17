import Express from "express"
import { Body, ForkBody, GithubEvents, PushBody } from "./Interfaces/Body";
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
        this.Secret = options?.secret ?? null;
        this.app = Express();
        this.app.use(Express.json())
        this.app.use(Express.urlencoded({ extended: true }));
        this.app.post(options?.endpoint ?? "/webhook", (req, res) => {
            const body: Body = req.body

            // Reserve for later?
            const event = req.headers["X-Github-Event"];

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
    public listen<K extends keyof GithubEvents>(event: K, response: (
        res: GithubEvents[K]
        ) => void)
    {
        this.Event.on("listen", (resp) => {
            const data = resp.data;
            return response(data);
        });
    }
}