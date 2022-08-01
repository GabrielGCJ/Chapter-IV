import { inject, injectable } from "tsyringe";
import { Category } from "@modules/Cars/Entities/Category";
import { ICategoriesRepository } from "@modules/Cars/Repositories/ICategoriesRepository";

// import { Category } from "../../Entities/Category";
// import { ICategoriesRepository } from "../../Repositories/ICategoriesRepository";

@injectable()
class ListCategoriesUseCase {
    constructor (
        @inject("CategoriesRepository")
        private categoriesRepository : ICategoriesRepository ) {}

    async execute(): Promise <Category[]> {
        const categories = await this.categoriesRepository.list()

        return categories
    }
}

export { ListCategoriesUseCase }