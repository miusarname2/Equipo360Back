import { Usuario } from "../infrastructure/repository/Usuario.js";

export class LoginController {
    
    dbOperations: Usuario = new Usuario();

    async login( data: object){
        try {
            const { email, password } = data as { email: string; password: string };
            const user = await this.dbOperations.verifyUser(email, password);
            if (!user) {
                throw {
                    message: "Invalid credentials",
                    code: "INVALID_CREDENTIALS",
                    status: 401
                };
            }
            return user;
        }catch (error: any) {
            throw {
                message: error.message || "An error occurred during login",
                code: error.code || "LOGIN_ERROR",
                status: error.status || 500
            };
        }
    }

}