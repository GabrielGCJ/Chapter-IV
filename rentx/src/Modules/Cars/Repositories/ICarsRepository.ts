import { ICreateCarDTO } from "../dtos/ICreateCarDTO"



interface ICarsReposytory {

    create(data: ICreateCarDTO): Promise <void>
}

export { ICarsReposytory }