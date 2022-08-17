
import { ICreateRentalDTO } from "../dtos/ICreateRentalsDTO"
import { Rental } from "../Infra/typeorm/Entities/Rental"

interface IRentalsRepository {
    create(data:ICreateRentalDTO):Promise<Rental>
    findOpenRentalByCar(car_id: string): Promise<Rental>
    findOpenRentalByUser(user_id: string): Promise<Rental>
}

export { IRentalsRepository }