import { container } from "tsyringe";

import { UsersRepository } from "@modules/Accounts/Infra/typeorm/repositories/UsersRepository";
import { IUsersRepository } from "@modules/Accounts/Repositories/IUsersRepository";
import { ICategoriesRepository } from "@modules/Cars/Repositories/ICategoriesRepository"
import { CategoriesRepository } from "@modules/Cars/Infra/typeorm/repositories/CategoriesRepository";
import { SpecificationsRepository } from "@modules/Cars/Infra/typeorm/repositories/SpecificationsRepository";
import { ISpecificotionsRepository } from "@modules/Cars/Repositories/ISpecificationRepository";

// import { SpecificationsRepository } from "@modules/Cars/Repositories/implementations/SpecificationsRepository";
// import { CategoriesRepository } from "@modules/Cars/Repositories/implementations/CategoriesRepository"
// import { UsersRepository } from "@modules/Accounts/Repositories/implementations/UsersRepository";

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