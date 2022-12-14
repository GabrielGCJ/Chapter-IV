import { getRepository, Repository } from "typeorm";
import { ICreateUserDTO } from "@modules/Accounts/DTOs/ICreateUserDTO";
import { User } from "../Entities/User";
import { IUsersRepository } from "@modules/Accounts/Repositories/IUsersRepository";

// import { ICreateUserDTO } from "../../DTOs/ICreateUserDTO";
// import { User } from "../../Entities/User";
// import { IUsersRepository } from "../IUsersRepository";




class UsersRepository implements IUsersRepository {
    private repository: Repository<User>

    constructor() {
        this.repository = getRepository(User)
    }    
    
    async create({name, email, driver_license, password, avatar, id}: ICreateUserDTO): Promise<void> {
        const user = this.repository.create({
            name,
            email,
            driver_license,
            password,
            avatar,
            id
        })

        await this.repository.save(user)
    }

    async findByEmail(email: string): Promise<any> {
        const user = await this.repository.findOne({ email })
        return user;
    }

    async findById(id: string): Promise<any> {
        const user = await this.repository.findOne( id )
        return user;
    }
}

export { UsersRepository }