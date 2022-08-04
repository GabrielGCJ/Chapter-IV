import { CarsRepositoryInMemory } from "@modules/Cars/Repositories/in-memory/CarsRepositoryInMemory"
import { AppError } from "@shared/Errors/AppError"
import { CreateCarUseCase } from "./CreateCarUseCase"

let createCarUseCase: CreateCarUseCase
let carsRepositoryInMemory: CarsRepositoryInMemory


describe("Create Car",() => {

    beforeEach(() =>{
        carsRepositoryInMemory = new CarsRepositoryInMemory()
        createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory)
    })


   it ("should be able create a new car",async () => {
    const car = await createCarUseCase.execute({
        name: "test",
        description: "test",
        daily_rate: 100,
        license_plate: "ABC-1234",
        fine_amount: 60,
        brand: "Brand",
        category_id: "category"
    })
    expect(car).toHaveProperty("id")
   }) 

   it("should not be able to create a car with exists license plate", () => {
        expect( async () => {
            await createCarUseCase.execute({
                name: "Car1",
                description: "test",
                daily_rate: 100,
                license_plate: "ABC-1234",
                fine_amount: 60,
                brand: "Brand",
                category_id: "category"
            })
            await createCarUseCase.execute({
                name: "Car2",
                description: "test",
                daily_rate: 100,
                license_plate: "ABC-1234",
                fine_amount: 60,
                brand: "Brand",
                category_id: "category"
            })


        }).rejects.toBeInstanceOf(AppError)
    })

    it("should not be able to create a car with available true by default", async () => {
        const car = await createCarUseCase.execute({
            name: "Car Available",
            description: "test",
            daily_rate: 100,
            license_plate: "ABC-1334",
            fine_amount: 60,
            brand: "Brand",
            category_id: "category"
        })

        expect (car.available).toBe(true)
    })
})