import { Request, Response, Router } from "express";
import { LoginController } from "./login.controller.js";

export const loginRoute: Router = Router();

loginRoute.post("/login", async (req: Request | any, res: Response) => {
    try {
        const resp = new LoginController();
        res.send(await resp.login(req.body));
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred";
        res.status(500).json({
            message: "Internal server error",
            error: errorMessage,
            status: 500
        })
    }
});