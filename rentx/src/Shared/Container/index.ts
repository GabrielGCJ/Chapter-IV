import { container } from "tsyringe";

import { UsersRepository } from "../../Modules/Accounts/Repositories/implementations/UsersRepository";
import { IUsersRepository } from "../../Modules/Accounts/Repositories/IUsersRepository";
import { ICategoriesRepository } from "../../Modules/Cars/Repositories/ICategoriesRepository"
import { CategoriesRepository } from "../../Modules/Cars/Repositories/implementations/CategoriesRepository"
import { SpecificationsRepository } from "../../Modules/Cars/Repositories/implementations/SpecificationsRepository";
import { ISpecificotionsRepository } from "../../Modules/Cars/Repositories/ISpecificationRepository";


container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository",
    CategoriesRepository
)

container.registerSingleton<ISpecificotionsRepository>(
    "SpecificationsRepository",
    SpecificationsRepository
)

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
)