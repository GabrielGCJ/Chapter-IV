import { inject, injectable } from "tsyringe"
import { AppError } from "@erros/AppError"
import { ICategoriesRepository } from "@modules/Cars/Repositories/ICategoriesRepository"

// import { AppError } from "../../../../Errors/AppError"
// import { ICategoriesRepository } from "../../Repositories/ICategoriesRepository"


interface IRequest {
    name:string,
    description:string
}
@injectable()
class CreateCategoryUseCase {
   
    constructor ( 
        @inject("CategoriesRepository")
        private categoriesRepository: ICategoriesRepository
    ) {}

    async execute({description, name}:IRequest): Promise <void>{

        const categoryAllReadyExists = await this.categoriesRepository.findByName(name)
    
        if(categoryAllReadyExists){
            throw new AppError( "Categoria já existe!!!")
        }
    
        this.categoriesRepository.create({ name, description })
    }
}

export { CreateCategoryUseCase }