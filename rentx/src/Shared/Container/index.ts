import { container } from "tsyringe";

import "@shared/Container/providers"

import { UsersRepository } from "@modules/Accounts/Infra/typeorm/repositories/UsersRepository";
import { IUsersRepository } from "@modules/Accounts/Repositories/IUsersRepository";
import { ICategoriesRepository } from "@modules/Cars/Repositories/ICategoriesRepository"
import { CategoriesRepository } from "@modules/Cars/Infra/typeorm/repositories/CategoriesRepository";
import { SpecificationsRepository } from "@modules/Cars/Infra/typeorm/repositories/SpecificationsRepository";
import { ISpecificotionsRepository } from "@modules/Cars/Repositories/ISpecificationRepository";
import { ICarsReposytory } from "@modules/Cars/Repositories/ICarsRepository";
import { CarsRepository } from "@modules/Cars/Infra/typeorm/repositories/CarsRepository";
import { ICarsImagesRepository } from "@modules/Cars/Repositories/ICarsImagesRepository";
import { CarsImagesRepository } from "@modules/Cars/Infra/typeorm/repositories/CarsImagesRepository";
import { IRentalsRepository } from "@modules/Rentals/Repositories/IRentalsRepository";
import { RentalsRepository } from "@modules/Rentals/Infra/typeorm/Repositories/RentalsRepository";

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

container.registerSingleton<ICarsReposytory>(
    "CarsRepository",
     CarsRepository
)

container.registerSingleton<ICarsImagesRepository>(
    "CarsImagesRepository",
    CarsImagesRepository
)

container.registerSingleton<IRentalsRepository>(
    "RentalsRepository",
    RentalsRepository
)