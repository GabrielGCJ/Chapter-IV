import { ICreateCarDTO } from "@modules/Cars/dtos/ICreateCarDTO";
import { Car } from "@modules/Cars/Infra/typeorm/Entities/Car";
import { ICarsReposytory } from "../ICarsRepository";

class CarsRepositoryInMemory implements ICarsReposytory {
    cars: Car[] = [];

    async create({ 
        brand,
        category_id,
        daily_rate,
        description,
        fine_amount,
        name,
        license_plate,
        id
             }: ICreateCarDTO): Promise<Car> {
        const car = new Car()

        Object.assign(car, {
            brand,
            category_id,
            daily_rate,
            description,
            fine_amount,
            name,
            license_plate,
            id
        })

        this.cars.push(car)

        return car
    }

    async findByLicensePlate(license_plate: string): Promise<any> {
        return this.cars.find((car) => car.license_plate === license_plate)
    }

    async findAvailable(
        brand?: string,
        category_id?: string,
        name?: string
    ): Promise<Car[]> {
        const all = this.cars.filter((car) => {
            if (
                car.available === true ||
                (brand && car.brand === brand) ||
                (category_id && car.category_id === category_id) ||
                (name && car.name === name)
            ) {
                return car
            }
            return null
        })
        return all
    }

    async findById(id:string): Promise<any> {
        return this.cars.find((car) => car.id === id)
    }
}

export { CarsRepositoryInMemory }