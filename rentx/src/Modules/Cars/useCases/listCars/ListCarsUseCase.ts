import { ICarsReposytory } from "@modules/Cars/Repositories/ICarsRepository";
import { Car } from "@modules/Cars/Infra/typeorm/Entities/Car";


interface IRequest {
    category_id?: string,
    brand?: string,
    name?: string
}




class ListCarsUseCase {
    constructor(
        private carsRepository: ICarsReposytory
    ){}

    async execute({category_id, brand, name}: IRequest):Promise<Car[]> {

        const cars = await this.carsRepository.findAvailable()

        return cars

    }


}

export { ListCarsUseCase }