import { ICreateCarDTO } from "@modules/Cars/dtos/ICreateCarDTO";
import { Car } from "@modules/Cars/Infra/typeorm/Entities/Car";
import { ICarsReposytory } from "../ICarsRepository";

class CarsRepositoryInMemory implements ICarsReposytory {
    cars: Car[] = [];
    
    async create({brand, category_id,daily_rate,description,fine_amount,name,license_plate}: ICreateCarDTO): Promise<Car> {
        const car = new Car()

        Object.assign(car, {
            brand,
            category_id,
            daily_rate,
            description,
            fine_amount,
            name,
            license_plate
        })

        this.cars.push(car)

        return car
    }

    async findByLicensePlate(license_plate:string):Promise<any>{
        return this.cars.find((car) => car.license_plate === license_plate)
    }
}

export { CarsRepositoryInMemory }