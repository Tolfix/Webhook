import Express from "express"
import Body from "./Interfaces/Body";
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
            this.Event.emit("listen", body);
            return res.sendStatus(200);
        });

        this.app.listen(Port);
    }

    /**
     * 
     * @param Event The event to listen for
     * @param cb Callback
     * @deprecated
     */
    public on(Event: "ready" | "error", cb: (event: string) => void)
    {
        // Working on..
    }

    /**
     * 
     * @param response 
     * @description Listens on the endpoint and respons when github send something
     */
    public listen(response: (res: Body) => void)
    {
        this.Event.on("listen", (data) => {
            response(data)
        });
    }
}