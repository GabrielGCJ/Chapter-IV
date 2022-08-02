import { Category } from "../Infra/typeorm/Entities/Category"

interface ICreateCategoryDTO {
    name:string,
    description: string
}


interface ICategoriesRepository {

    findByName(name: string): Promise<Category>
    list(): Promise <Category[]>
    create({name, description}:ICreateCategoryDTO ): Promise<void>
}

export { ICategoriesRepository, ICreateCategoryDTO }