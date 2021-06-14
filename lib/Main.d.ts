/// <reference types="node" />
import Body from "./Interfaces/Body";
import Options from "./Interfaces/Options";
import event from "events";
/**
 * @description Spins up a http server which listens on a POST request
 * @default endpoint = "/webhook"
 */
export default class SimpleWebhook {
    protected Port: number;
    protected Secret: string | null;
    protected app: import("express-serve-static-core").Express;
    protected Event: event;
    constructor(Port: number, options?: Options);
    /**
     *
     * @param Event The event to listen for
     * @param cb Callback
     * @deprecated
     */
    on(Event: "ready" | "error", cb: (event: string) => void): void;
    /**
     *
     * @param response
     * @description Listens on the endpoint and respons when github send something
     */
    listen(response: (res: Body) => void): void;
}
