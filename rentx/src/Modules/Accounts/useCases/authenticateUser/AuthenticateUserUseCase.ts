import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

// import { AppError } from "../../../../Errors/AppError";
// import { IUsersRepository } from "../../Repositories/IUsersRepository";
// import { AppError } from "@erros/AppError";

import { AppError } from "@shared/Errors/AppError";
import { IUsersRepository } from "@modules/Accounts/Repositories/IUsersRepository";

interface IRequest {
    email:string;
    password:string;
}

interface IResponse {
    user: {
        name: string,
        email: string
    },  
    token: string
}

@injectable()
class AuthenticateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ){}



    async execute( { email, password }: IRequest ) :Promise <IResponse>{

        const user = await this.usersRepository.findByEmail(email)

        if(!user){throw new AppError("Email or Password Incorrect!")}

        const passwordMatch = await compare(password, user.password)

        if(!passwordMatch){throw new AppError("Email or Password Incorrect!")}

        const token = sign({}, "fghdfghddfhgh34gdrfgsdts",{
            subject: user.id,
            expiresIn:"1d"
        })

        const tokenReturn: IResponse = {
            token,
            user:{
                name:user.name,
                email:user.email
            }
        }

        return tokenReturn            
    }
}

export { AuthenticateUserUseCase }