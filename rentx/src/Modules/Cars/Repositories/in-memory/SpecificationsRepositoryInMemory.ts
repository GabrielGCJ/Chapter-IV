import { Specification } from "@modules/Cars/Infra/typeorm/Entities/Specification";
import { ICreateSpecificationDTO, ISpecificotionsRepository } from "../ISpecificationRepository";


class SpecificationsRepositoryInMemory implements ISpecificotionsRepository {

    specifications: Specification[] = []

    async create({ description, name }: ICreateSpecificationDTO): Promise<void> {

        const specification = new Specification()

        Object.assign (specification, {
            description,
            name,
        })

        this.specifications.push(specification)
    }

    async findByName(name: string): Promise<any> {
        return this.specifications.find(
            (specifications) => specifications.name === name
        )
    }

    async findByIds(ids: string[]): Promise<Specification[]> {
        const allSpecifications = this.specifications.filter((specifications) => 
            ids.includes( specifications.id as string )
        )        
        return allSpecifications
    }
}

    export { SpecificationsRepositoryInMemory }