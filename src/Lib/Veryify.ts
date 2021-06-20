import { Request, Response, NextFunction } from "express"
import crypto from "crypto";

export function sign(data: any, secret: string) 
{
    return `sha1=${crypto.createHmac('sha1', secret).update(JSON.stringify(data)).digest('hex')}`
}

export function verify(signature: string, data: any, secret: string) 
{
    const sig = Buffer.from(signature)
    const signed = Buffer.from(sign(data, secret))
    if (sig.length !== signed.length) {
        return false
    }
    return crypto.timingSafeEqual(sig, signed)
}