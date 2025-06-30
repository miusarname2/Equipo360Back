import { Response } from 'express';
import rateLimit from 'express-rate-limit';

export const limitGrt = ()=>{
    return rateLimit(
        {
            windowMs: 15 * 60 * 1000, // 15 minutes
            max: 1000, // Limit each IP to 100 requests per windowMs
            message: {
                status: 429,
                message: "Too many requests, please try again later."
            },
            standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
            legacyHeaders: false, // Disable the `X-RateLimit-*` headers
            skip : (req:any, res:Response) => {
                if (parseInt(req.headers["content-length"]) > 700) {
                    res.status(413).send({
                        status: 413,
                        message: "Request entity too large. Please reduce the size of your request."
                    })
                    return true; // Skip rate limiting for large requests
                }
                return false; // Apply rate limiting for all other requests
            }
        }
    )
}