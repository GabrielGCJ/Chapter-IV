import { ICreateCarDTO } from "@modules/Cars/dtos/ICreateCarDTO";
import { Car } from "@modules/Cars/Infra/typeorm/Entities/Car";
import { ICarsReposytory } from "../ICarsRepository";

class CarsRepositoryInMemory implements ICarsReposytory {
    cars: Car[] = [];
    
    async create({brand, category_id,daily_rate,description,fine_amount,name,license_plate}: ICreateCarDTO): Promise<void> {
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
    }
}

export { CarsRepositoryInMemory }