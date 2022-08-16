import { Car } from "../Infra/typeorm/Entities/Car";



interface ICarsImagesRepository {
    create (car_id: string, image_name: string):Promise<Car>
}

export { ICarsImagesRepository }