import { inject, injectable } from "tsyringe";
import { hash } from "bcryptjs"

// import { AppError } from "../../../../Errors/AppError";
// import { ICreateUserDTO } from "../../DTOs/ICreateUserDTO";
// import { IUsersRepository } from "../../Repositories/IUsersRepository";

import { AppError } from "@erros/AppError";
import { ICreateUserDTO } from "@modules/Accounts/DTOs/ICreateUserDTO";
import { IUsersRepository } from "@modules/Accounts/Repositories/IUsersRepository";

@injectable()
class CreateUserUseCase {


    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}


    async execute({ name, email, password, driver_license }:ICreateUserDTO):Promise<void> {
        
        const userAlreadyExists = await this.usersRepository.findByEmail(email)

        if(userAlreadyExists){
            throw new AppError("User already exists")
        }

        const passwordHash = await hash(password, 8)
        
        await this.usersRepository.create({
            name,
            email,
            password:passwordHash,
            driver_license 
        })
    }
}

export { CreateUserUseCase }