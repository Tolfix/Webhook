"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var events_1 = __importDefault(require("events"));
var Verify_1 = require("./Lib/Verify");
/**
 * @description Spins up a http server which listens on a POST request
 * @default endpoint = "/webhook"
 */
var SimpleWebhook = /** @class */ (function () {
    function SimpleWebhook(Port, options) {
        var _this = this;
        var _a, _b, _c, _d;
        this.Event = new events_1.default.EventEmitter();
        if (typeof Port === "number") {
            this.Port = Port;
            /**
             * @Tolfx
             * Something to look at?
             */
            this.Secret = (_a = options === null || options === void 0 ? void 0 : options.secret) !== null && _a !== void 0 ? _a : undefined;
            this.app = express_1.default();
            this.app.use(express_1.default.json());
            this.app.use(express_1.default.urlencoded({ extended: true }));
            this.app.post((_b = options === null || options === void 0 ? void 0 : options.endpoint) !== null && _b !== void 0 ? _b : "/webhook", function (req, res) {
                var body = req.body;
                var event = req.headers["x-github-event"];
                var sig = req.headers['x-hub-signature'];
                var isSigned = true;
                if (_this.Secret)
                    isSigned = Verify_1.verify(sig, body, _this.Secret);
                if (!isSigned)
                    return _this.Event.emit("error", "The signature didn't pass");
                _this.Event.emit("listen", { body: body, event: event });
                return res.sendStatus(200);
            });
            this.app.listen(Port);
        }
        // Assume is an express app
        else {
            this.Server = Port;
            this.Secret = (_c = options === null || options === void 0 ? void 0 : options.secret) !== null && _c !== void 0 ? _c : undefined;
            this.Server.use(express_1.default.json());
            this.Server.use(express_1.default.urlencoded({ extended: true }));
            this.Server.post((_d = options === null || options === void 0 ? void 0 : options.endpoint) !== null && _d !== void 0 ? _d : "/webhook", function (req, res) {
                var body = req.body;
                var event = req.headers["x-github-event"];
                var sig = req.headers['x-hub-signature'];
                var isSigned = true;
                if (_this.Secret)
                    isSigned = Verify_1.verify(sig, body, _this.Secret);
                if (!isSigned)
                    return _this.Event.emit("error", new Error("The signature didn't pass"));
                _this.Event.emit("listen", { body: body, event: event });
                return res.sendStatus(200);
            });
        }
    }
    /**
     * @description
     */
    SimpleWebhook.prototype.on = function (event, cb) {
        if (event === "error") {
            this.Event.on("error", function (error) {
                cb(error);
            });
        }
    };
    /**
     *
     * @param response
     * @description Listens on the endpoint and respons when github send something
     */
    SimpleWebhook.prototype.listen = function (event, response) {
        this.Event.on("listen", function (resp) {
            var data = resp.body;
            var e_event = resp.event;
            // To prevent missleading data leaking in..
            if (event === e_event)
                return response(data);
            // If you so desire it.
            else if (event === "everything")
                return response(data);
        });
    };
    return SimpleWebhook;
}());
module.exports = SimpleWebhook;
;
