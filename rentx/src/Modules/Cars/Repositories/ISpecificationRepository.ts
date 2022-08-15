// import { Specification } from "../Infra/typeorm/Entities/Specification";

import { Specification } from "@modules/Cars/Infra/typeorm/Entities/Specification";

interface ICreateSpecificationDTO{
    name: string,
    description: string
}

interface ISpecificotionsRepository {

    create({description, name} : ICreateSpecificationDTO): Promise<void>
    findByName( name: string ): Promise <Specification>;
    findByIds(ids: string[]):Promise<Specification[]>
}

export {ICreateSpecificationDTO,ISpecificotionsRepository}



