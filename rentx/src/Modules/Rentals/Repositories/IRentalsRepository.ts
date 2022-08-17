import { Rental } from "../Infra/typeorm/Entities/Rental"

interface IRentalsRepository {

    findOpenRentalByCar(car_id: string): Promise<Rental>
    findOpenRentalByUser(user_id: string): Promise<Rental>
}

export { IRentalsRepository }