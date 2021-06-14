import { SimpleGit } from 'simple-git';
import Options from "./Interfaces/Options";
/**
 * @description Spins upp a webserver
 */
export default class SimpleWebhook {
    protected Port: number;
    protected GIT: SimpleGit;
    protected app: import("express-serve-static-core").Express;
    constructor(Port: number, options?: Options);
    /**
     *
     * @param Event The event to listen for
     * @param cb Callback
     */
    on(Event: "ready" | "error", cb: (event: string) => void): void;
}
