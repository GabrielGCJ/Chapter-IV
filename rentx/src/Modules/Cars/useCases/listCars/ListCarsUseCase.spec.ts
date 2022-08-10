import { CarsRepositoryInMemory } from "@modules/Cars/Repositories/in-memory/CarsRepositoryInMemory"
import { ListCarsUseCase } from "./ListCarsUseCase"

let listCarsUseCase: ListCarsUseCase
let carsRepositoryInMemory: CarsRepositoryInMemory

describe("List Cars", () => {
    beforeEach(() => {
        carsRepositoryInMemory = new CarsRepositoryInMemory()
        listCarsUseCase = new ListCarsUseCase(carsRepositoryInMemory)
    })
    
    it("should be able to list all available cars",async () => {

        const car = await carsRepositoryInMemory.create({
            "name":"Car1",
            "description":"Car description",
            "daily_rate": 110.0,
            "license_plate":"DEG-0000",
            "fine_amount": 20,
            "brand":"car_brand",
            "category_id":"category_id"
        })        

        const cars = await listCarsUseCase.execute({})

        expect(cars).toEqual([car])    
    })    

    it("should be able to list all available cars by name", async () => {
        const car = await carsRepositoryInMemory.create({
            "name":"Car2",
            "description":"Car description",
            "daily_rate": 110.0,
            "license_plate":"DEX-1000",
            "fine_amount": 20,
            "brand":"car_brand_test",
            "category_id":"category_id"
        })

        const cars = await listCarsUseCase.execute({
            brand: "car_brand_test"
        })

        console.log(cars)

        expect(cars).toEqual([car])
    })
})