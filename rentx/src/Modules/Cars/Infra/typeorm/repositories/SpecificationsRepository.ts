import { getRepository, Repository } from "typeorm"
import { Specification } from "../Entities/Specification"
import { ICreateSpecificationDTO, ISpecificotionsRepository } from "@modules/Cars/Repositories/ISpecificationRepository"

class SpecificationsRepository implements ISpecificotionsRepository {
    private repository : Repository<Specification>

    constructor(){
        this.repository = getRepository(Specification)
    }

    async create({ description, name }: ICreateSpecificationDTO): Promise<void> {
        const specification = this.repository.create({
            name,
            description
       })
       await this.repository.save(specification)
    }

    async findByName(name: string): Promise<any> {
        const specification = this.repository.findOne({name})
        return specification
    }
}

export { SpecificationsRepository }