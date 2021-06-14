"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var simple_git_1 = __importDefault(require("simple-git"));
/**
 * @description Spins upp a webserver
 */
var SimpleWebhook = /** @class */ (function () {
    function SimpleWebhook(Port, options) {
        var _a;
        this.GIT = simple_git_1.default();
        this.Port = Port;
        this.app = express_1.default();
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.post((_a = options === null || options === void 0 ? void 0 : options.endpoint) !== null && _a !== void 0 ? _a : "/webhook", function (req, res) {
            var body = req.body;
            var html_url = body.repository.html_url;
            //this.GIT.pull(html_url);
            return res.sendStatus(200);
        });
        this.app.listen(Port);
    }
    /**
     *
     * @param Event The event to listen for
     * @param cb Callback
     */
    SimpleWebhook.prototype.on = function (Event, cb) {
        // Working on..
    };
    SimpleWebhook.prototype.listen = function (response) {
        // Working on..
    };
    return SimpleWebhook;
}());
exports.default = SimpleWebhook;
