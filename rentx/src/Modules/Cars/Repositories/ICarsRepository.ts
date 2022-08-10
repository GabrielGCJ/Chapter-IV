import { ICreateCarDTO } from "../dtos/ICreateCarDTO"
import { Car } from "../Infra/typeorm/Entities/Car"



interface ICarsReposytory {

    create(data: ICreateCarDTO): Promise <Car>
    findByLicensePlate(license_plate: string):Promise<Car>
    findAvailable(
        brand?:string,
        category_id?:string,
        name?:string
    ):Promise<Car[]>
}

export { ICarsReposytory }