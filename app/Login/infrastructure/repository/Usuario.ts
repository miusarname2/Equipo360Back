import { prismaConnection } from "../database/connection.js";

export class Usuario {

    public db: any;

    constructor() {
        this.db = prismaConnection;
    }

    async verifyUser(email: string, password: string) {

        try {
            const user = await this.db.usuario.findFirst({
                where: {
                    email: email,
                    password: password
                }
            });
            return user;
        } catch (error: any) {
            throw new Error("Error verifying user: " + error.message);
        }

    }

}