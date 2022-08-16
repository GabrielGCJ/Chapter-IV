import { getRepository, Repository } from "typeorm"
import { Specification } from "../Entities/Specification"
import { ICreateSpecificationDTO, ISpecificotionsRepository } from "@modules/Cars/Repositories/ISpecificationRepository"

class SpecificationsRepository implements ISpecificotionsRepository {
    private repository : Repository<Specification>

    constructor(){
        this.repository = getRepository(Specification)
    }
    

    async create({ description, name }: ICreateSpecificationDTO): Promise<Specification> {
        const specification = this.repository.create({
            name,
            description
       })
       await this.repository.save(specification)

       return specification
    }

    async findByName(name: string): Promise<any> {
        const specification = await this.repository.findOne({name})
        return specification
    }

    async findByIds(ids: string[]): Promise<Specification[]> {
        const specifications = await this.repository.findByIds(ids)

        return specifications
    }
}

export { SpecificationsRepository }