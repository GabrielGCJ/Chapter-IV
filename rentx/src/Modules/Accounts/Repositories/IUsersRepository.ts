import { ICreateUserDTO } from "../DTOs/ICreateUserDTO"
import { User } from "../Infra/typeorm/Entities/User"

interface IUsersRepository {
    create(data:ICreateUserDTO ):Promise<void>
    findByEmail(email:string):Promise <User>
    findById(id:string):Promise<User>
}

export { IUsersRepository }