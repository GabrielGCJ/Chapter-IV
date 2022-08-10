import { inject, injectable } from "tsyringe";
import { Category } from "@modules/Cars/Infra/typeorm/Entities/Category";
import { ICategoriesRepository } from "@modules/Cars/Repositories/ICategoriesRepository";

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