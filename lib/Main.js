"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var events_1 = __importDefault(require("events"));
/**
 * @description Spins up a http server which listens on a POST request
 * @default endpoint = "/webhook"
 */
var SimpleWebhook = /** @class */ (function () {
    function SimpleWebhook(Port, options) {
        var _this = this;
        var _a, _b;
        this.Event = new events_1.default.EventEmitter();
        this.Port = Port;
        this.Secret = (_a = options === null || options === void 0 ? void 0 : options.secret) !== null && _a !== void 0 ? _a : null;
        this.app = express_1.default();
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.post((_b = options === null || options === void 0 ? void 0 : options.endpoint) !== null && _b !== void 0 ? _b : "/webhook", function (req, res) {
            var body = req.body;
            // Reserve for later?
            var event = req.headers["X-Github-Event"];
            _this.Event.emit("listen", { body: body, event: event });
            return res.sendStatus(200);
        });
        this.app.listen(Port);
    }
    /**
     *
     * @param response
     * @description Listens on the endpoint and respons when github send something
     */
    SimpleWebhook.prototype.listen = function (event, response) {
        this.Event.on("listen", function (resp) {
            var data = resp.data;
            return response(data);
        });
    };
    return SimpleWebhook;
}());
exports.default = SimpleWebhook;
