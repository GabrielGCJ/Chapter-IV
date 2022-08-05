import { getRepository, Repository } from "typeorm";
import { ICreateCarDTO } from "@modules/Cars/dtos/ICreateCarDTO";
import { ICarsReposytory } from "@modules/Cars/Repositories/ICarsRepository";
import { Car } from "../Entities/Car";

class CarsRepository implements ICarsReposytory {
    private repository : Repository<Car>

    constructor(){
        this.repository = getRepository(Car)
    }


    async create({
        brand,
        category_id,
        daily_rate,
        description,
        fine_amount,
        license_plate,
        name
    }: ICreateCarDTO): Promise<Car> {
        const car = this.repository.create({
            brand,
            category_id,
            daily_rate,
            description,
            fine_amount,
            license_plate,
            name
        })

        await this.repository.save(car)

        return car
    }

    async findByLicensePlate(license_plate: string): Promise<any> {
        const car = await this.repository.findOne({ license_plate })
        return car
    }
}

export { CarsRepository }