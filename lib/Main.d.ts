/// <reference types="node" />
import { Application } from "express";
import { GithubEvents } from "./Interfaces/Body";
import Options from "./Interfaces/Options";
import event from "events";
import { OnEvents } from "./Interfaces/On";
/**
 * @description Spins up a http server which listens on a POST request
 * @default endpoint = "/webhook"
 */
export default class SimpleWebhook<P extends Application | number> {
    protected Port: number | undefined;
    protected Server: Application | undefined;
    protected Secret: string | undefined;
    protected app: import("express-serve-static-core").Express | undefined;
    protected Event: event;
    constructor(Port: number | P, options?: Options);
    /**
     * @description
     */
    on<A extends keyof OnEvents>(event: A, cb: (res: OnEvents[A]) => void): void;
    /**
     *
     * @param response
     * @description Listens on the endpoint and respons when github send something
     */
    listen<K extends keyof GithubEvents>(event: K, response: (res: GithubEvents[K]) => void): void;
}
