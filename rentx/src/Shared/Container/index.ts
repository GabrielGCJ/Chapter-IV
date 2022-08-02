import { container } from "tsyringe";

import { UsersRepository } from "@modules/Accounts/Infra/typeorm/repositories/UsersRepository";
import { IUsersRepository } from "@modules/Accounts/Repositories/IUsersRepository";
import { ICategoriesRepository } from "@modules/Cars/Repositories/ICategoriesRepository"
import { CategoriesRepository } from "@modules/Cars/Infra/typeorm/repositories/CategoriesRepository";
import { SpecificationsRepository } from "@modules/Cars/Infra/typeorm/repositories/SpecificationsRepository";
import { ISpecificotionsRepository } from "@modules/Cars/Repositories/ISpecificationRepository";

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