import { ICreateCarDTO } from "../dtos/ICreateCarDTO"
import { Car } from "../Infra/typeorm/Entities/Car"



interface ICarsReposytory {

    create(data: ICreateCarDTO): Promise <Car>
    findByLicensePlate(license_plate: string):Promise<Car>
}

export { ICarsReposytory }