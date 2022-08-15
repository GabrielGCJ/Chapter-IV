import { Specification } from "@modules/Cars/Infra/typeorm/Entities/Specification";
import { SpecificationsRepository } from "@modules/Cars/Infra/typeorm/repositories/SpecificationsRepository";
import { ICarsReposytory } from "@modules/Cars/Repositories/ICarsRepository";
import { ISpecificotionsRepository } from "@modules/Cars/Repositories/ISpecificationRepository";
import { AppError } from "@shared/Errors/AppError";
import { inject, injectable } from "tsyringe";

interface IRequest {

    car_id: string;
    specifications_id: string[]
}

// @injectable()
class CreateCarSpecificationUseCase {

    constructor(
        // @inject("CarsRepository")
        private carsRepository: ICarsReposytory,
        private specificationsRepository: ISpecificotionsRepository
    ){}

    async execute({car_id,specifications_id}:IRequest):Promise<void> {

        const carExists = await this.carsRepository.findById(car_id)

        if(!carExists){throw new AppError("Car does not exists!")}

        const specifications = await this.specificationsRepository.findByIds(
            specifications_id
        )

        carExists.specifications = specifications

        await this.carsRepository.create(carExists)

        console.log(carExists)
    } 
}

export { CreateCarSpecificationUseCase }