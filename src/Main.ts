import Express from "express"
import simpleGit, {SimpleGit} from 'simple-git';
import Body from "./Interfaces/Body";
import Options from "./Interfaces/Options";

/**
 * @description Spins upp a webserver
 */
export default class SimpleWebhook
{
    protected Port: number;
    protected GIT: SimpleGit = simpleGit();
    protected app;

    constructor(Port: number, options?: Options)
    {
        this.Port = Port
        this.app = Express();
        this.app.use(Express.json())
        this.app.use(Express.urlencoded({ extended: true }));
        this.app.post(options?.endpoint ?? "/webhook", (req, res) => {
            const body: Body = req.body
            const html_url = body.repository.html_url;
            this.GIT.pull(html_url);
            return res.sendStatus(200);
        });

        this.app.listen(Port);
    }

    /**
     * 
     * @param Event The event to listen for
     * @param cb Callback
     */
    public on(Event: "ready" | "error", cb: (event: string) => void)
    {
        // Working on..
    }
}