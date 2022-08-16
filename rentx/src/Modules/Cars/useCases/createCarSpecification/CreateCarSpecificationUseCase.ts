import { inject, injectable } from "tsyringe";
import { Car } from "@modules/Cars/Infra/typeorm/Entities/Car";
import { Specification } from "@modules/Cars/Infra/typeorm/Entities/Specification";
import { SpecificationsRepository } from "@modules/Cars/Infra/typeorm/repositories/SpecificationsRepository";
import { ICarsReposytory } from "@modules/Cars/Repositories/ICarsRepository";
import { ISpecificotionsRepository } from "@modules/Cars/Repositories/ISpecificationRepository";
import { AppError } from "@shared/Errors/AppError";

interface IRequest {

    car_id: string;
    specifications_id: string[]
}

@injectable()
class CreateCarSpecificationUseCase {

    constructor(
        @inject("CarsRepository")
        private carsRepository: ICarsReposytory,
        @inject("SpecificationsRepository")
        private specificationsRepository: ISpecificotionsRepository
    ){}

    async execute({car_id,specifications_id}:IRequest):Promise<Car> {

        const carExists = await this.carsRepository.findById(car_id)

        if(!carExists){throw new AppError("Car does not exists!")}

        const specifications = await this.specificationsRepository.findByIds(
            specifications_id
        )

        carExists.specifications = specifications

        await this.carsRepository.create(carExists)

        return carExists
    } 
}

export { CreateCarSpecificationUseCase }