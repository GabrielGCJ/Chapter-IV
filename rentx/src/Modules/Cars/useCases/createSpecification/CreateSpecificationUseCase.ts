import { inject, injectable } from "tsyringe";
import { AppError } from "@shared/Errors/AppError";
import { ISpecificotionsRepository } from "@modules/Cars/Repositories/ISpecificationRepository";

interface IRequest{
    name : string;
    description: string
}
@injectable()
class CreateSpecificationUseCase {
    constructor( 
        @inject("SpecificationsRepository")
        private specificationRepository: ISpecificotionsRepository
    ){}

    async execute({ name, description }: IRequest): Promise <void> {

      const specificatinAllReadyExists = await this.specificationRepository.findByName(name)

        if(specificatinAllReadyExists){
            throw new AppError("Especificação já existe!")
        }


        this.specificationRepository.create({ name, description })
    }
}

export { CreateSpecificationUseCase } 