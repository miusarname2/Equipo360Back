import { NextFunction, Request, Response } from "express";
import { Usuario } from "../dto/Usuario.dto.js";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";

export var data: object;

export async function validateUser(req: Request, res: Response, next: NextFunction) {
    try {
        data = plainToClass(Usuario, req.body, {
            excludeExtraneousValues: true,
        });
        await validate(data);
        req.body = data;
        next();
    } catch (errors) {
        res.status(422).json({
            message: "Validation failed",
            status: 422
        });
    }
}