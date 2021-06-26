"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verify = exports.sign = void 0;
var crypto_1 = __importDefault(require("crypto"));
function sign(data, secret) {
    return "sha1=" + crypto_1.default.createHmac('sha1', secret).update(JSON.stringify(data)).digest('hex');
}
exports.sign = sign;
function verify(signature, data, secret) {
    var sig = Buffer.from(signature);
    var signed = Buffer.from(sign(data, secret));
    if (sig.length !== signed.length) {
        return false;
    }
    return crypto_1.default.timingSafeEqual(sig, signed);
}
exports.verify = verify;
