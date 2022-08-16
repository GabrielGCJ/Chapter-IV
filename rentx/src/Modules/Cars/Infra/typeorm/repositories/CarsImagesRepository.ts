import { getRepository, Repository } from "typeorm";
import { ICarsImagesRepository } from "@modules/Cars/Repositories/ICarsImagesRepository";
import { CarImage } from "../Entities/CarImage";


class CarsImagesRepository implements ICarsImagesRepository {
    private repository : Repository<CarImage>

    constructor () {
        this.repository = getRepository(CarImage)
    }


    async create(car_id: string, image_name: string): Promise<any> {
        const carImage = this.repository.create({
            car_id,
            image_name
        })
        await this.repository.save(carImage)

        return carImage
    }



}

export { CarsImagesRepository }