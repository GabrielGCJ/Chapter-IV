import { inject, injectable } from "tsyringe";
import { ICarsReposytory } from "@modules/Cars/Repositories/ICarsRepository";
import { Car } from "@modules/Cars/Infra/typeorm/Entities/Car";
import { AppError } from "@shared/Errors/AppError";


interface IRequest {
    name: string;
    description: string;
    daily_rate: number;
    license_plate: string;
    fine_amount: number;
    brand: string;
    category_id: string;
}

@injectable()
class CreateCarUseCase {
    constructor(
        @inject("CarsRepository")
        private carsRepository: ICarsReposytory
    ) {}

    async execute({
        name,
        description,
        daily_rate,
        license_plate,
        fine_amount,
        brand,
        category_id
    
    }:IRequest): Promise<Car>{

        const carAlreadyExist = await this.carsRepository.findByLicensePlate(license_plate);

        if(carAlreadyExist){
            throw new AppError("Car already exist")
        }

        const car = await this.carsRepository.create({
            name,
            description,
            daily_rate,
            license_plate,
            fine_amount,
            brand,
            category_id
        })     
       
        return car
    }
}

export { CreateCarUseCase }