import { CarsRepositoryInMemory } from "@modules/Cars/Repositories/in-memory/CarsRepositoryInMemory"
import { CreateCarUseCase } from "./CreateCarUseCase"

let createCarUseCase: CreateCarUseCase
let carsRepositoryInMemory: CarsRepositoryInMemory


describe("Create Car",() => {

    beforeEach(() =>{
        carsRepositoryInMemory = new CarsRepositoryInMemory()
        createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory)
    })


   it ("should be able create a new car",async () => {
    await createCarUseCase.execute({
        name: "test",
        description: "test",
        daily_rate: 100,
        license_plate: "ABC-1234",
        fine_amount: 60,
        brand: "Brand",
        category_id: "category"
    })
   }) 
})