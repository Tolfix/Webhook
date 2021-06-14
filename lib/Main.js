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
            _this.Event.emit("listen", body);
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
    SimpleWebhook.prototype.on = function (Event, cb) {
        // Working on..
    };
    /**
     *
     * @param response
     * @description Listens on the endpoint and respons when github send something
     */
    SimpleWebhook.prototype.listen = function (response) {
        this.Event.on("listen", function (data) {
            response(data);
        });
    };
    return SimpleWebhook;
}());
exports.default = SimpleWebhook;
