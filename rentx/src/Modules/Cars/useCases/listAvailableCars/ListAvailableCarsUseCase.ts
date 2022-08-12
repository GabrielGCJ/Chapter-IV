import { ICarsReposytory } from "@modules/Cars/Repositories/ICarsRepository";
import { Car } from "@modules/Cars/Infra/typeorm/Entities/Car";
import { inject, injectable } from "tsyringe";


interface IRequest {
    category_id?: string,
    brand?: string,
    name?: string
}



@injectable()
class ListAvailableCarsUseCase {
    constructor(
        @inject("CarsRepository")
        private carsRepository: ICarsReposytory
    ){}

    async execute({category_id, brand, name}: IRequest):Promise<Car[]> {

        const cars = await this.carsRepository.findAvailable(
            brand,
            category_id,
            name
        )

        return cars

    }


}

export { ListAvailableCarsUseCase }