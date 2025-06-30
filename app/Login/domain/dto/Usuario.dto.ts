import { Expose } from "class-transformer";
import { IsDefined, IsEmail, IsInt, IsString } from "class-validator";

export class Usuario {
    @Expose({ name: "email" })
    @IsString()
    @IsEmail()
    @IsDefined(
        {
            message: () => {
                throw {
                    message: "Email is mandatory",
                    code: "EMAIL_REQUIRED",
                    status: 422
                }
            }
        }
    )
    protected email: string;

    @Expose({ name: "username" })
    @IsString()
    @IsDefined(
        {
            message: () => {
                throw {
                    message: "Username is mandatory",
                    code: "USERNAME_REQUIRED",
                    status: 422
                }
            }
        }
    )
    protected username: string;

    @Expose({ name: "password" })
    @IsString()
    @IsDefined(
        {
            message: () => {
                throw {
                    message: "Password is mandatory",
                    code: "PASSWORD_REQUIRED",
                    status: 422
                }
            }
        }
    )
    private password: string;

    @Expose({ name: "idPerfil" })
    @IsInt()
    @IsDefined(
        {
            message: () => {
                throw {
                    message: "Perfil ID is mandatory",
                    code: "PERFIL_ID_REQUIRED",
                    status: 422
                }
            }
        }
    )
    private perfilId: number;

    constructor(email: string, username: string, password: string, perfilId: number) {
        this.email = email;
        this.username = username;
        this.password = password;
        this.perfilId = perfilId;
    }

}