import Express from "express"
import { Application } from "express";
import { GithubEvents } from "./Interfaces/Body";
import Options from "./Interfaces/Options";
import event from "events";
import { verify } from "./Lib/Verify";
import { OnEvents } from "./Interfaces/On";

/**
 * @description Spins up a http server which listens on a POST request
 * @default endpoint = "/webhook"
 */
export default class SimpleWebhook<P extends Application | number>
{
    protected Port: number | undefined;
    protected Server: Application | undefined
    protected Secret: string | undefined;
    protected app;
    protected Event = new event.EventEmitter();

    constructor(Port: number | P, options?: Options)
    {
        if(typeof Port === "number")
        {
            this.Port = Port;
            /**
             * @Tolfx
             * Something to look at?
             */
            this.Secret = options?.secret ?? undefined;
            this.app = Express();
            this.app.use(Express.json())
            this.app.use(Express.urlencoded({ extended: true }));
            this.app.post(options?.endpoint ?? "/webhook", (req, res) => {
                let body = req.body
                const event = req.headers["x-github-event"] as string;
                const sig = req.headers['x-hub-signature'] as string;
                let isSigned = true;

                if(this.Secret)
                    isSigned = verify(sig, body, this.Secret);

                if(!isSigned)
                    return this.Event.emit("error", `The signature didn't pass`);

                this.Event.emit("listen", {body,event});
                
                return res.sendStatus(200);
            });
    
            this.app.listen(Port);
        }
        // Assume is an express app
        else
        {
            this.Server = Port as Application;
            this.Secret = options?.secret ?? undefined;
            this.Server.use(Express.json())
            this.Server.use(Express.urlencoded({ extended: true }));
            this.Server.post(options?.endpoint ?? "/webhook", (req, res) => {
                let body = req.body
                const event = req.headers["x-github-event"] as string;
                const sig = req.headers['x-hub-signature'] as string;
                let isSigned = true;

                if(this.Secret)
                    isSigned = verify(sig, body, this.Secret);

                if(!isSigned)
                    return this.Event.emit("error", new Error(`The signature didn't pass`));

                this.Event.emit("listen", {body,event});
                
                return res.sendStatus(200);
            });
        }
    }

    /**
     * @description
     */
    public on<A extends keyof OnEvents>(event: A, cb: (res: OnEvents[A]) => void)
    {
        if(event === "error")
        {
            this.Event.on("error", (error) => {
                cb(error)
            });
        }
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
        });
    }
};