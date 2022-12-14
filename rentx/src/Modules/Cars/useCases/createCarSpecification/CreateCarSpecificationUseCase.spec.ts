import { CarsRepositoryInMemory } from "@modules/Cars/Repositories/in-memory/CarsRepositoryInMemory";
import { SpecificationsRepositoryInMemory } from "@modules/Cars/Repositories/in-memory/SpecificationsRepositoryInMemory";
import { AppError } from "@shared/Errors/AppError";
import { CreateCarSpecificationUseCase } from "./CreateCarSpecificationUseCase"

let createCarSpecificationUseCase: CreateCarSpecificationUseCase;
let carsRepositoryInMemory:  CarsRepositoryInMemory
let specificationsRepositoryInMemory : SpecificationsRepositoryInMemory


describe("Create Car Specification", () => {

    beforeEach(() => {
        carsRepositoryInMemory = new CarsRepositoryInMemory()
        specificationsRepositoryInMemory = new SpecificationsRepositoryInMemory()
        createCarSpecificationUseCase = new CreateCarSpecificationUseCase(
            carsRepositoryInMemory,
            specificationsRepositoryInMemory
        )
    })

    it("should not be able to add a new specification to a now-existent car", async  () => {

        expect( async () => {
            const car_id = "1234"
            const specifications_id = ["53521"]

            await createCarSpecificationUseCase.execute({car_id, specifications_id})
        }).rejects.toBeInstanceOf(AppError)
    })

    it("should be able to add a new specification to the car", async  () => {
        const car = await carsRepositoryInMemory.create({
            name:"Name Car",
            description:"Description Car",
            daily_rate:100,
            license_plate:"NAN-0212",
            fine_amount:60,
            brand:"Brand",
            category_id:"categoryy",

        })

        const specification = await specificationsRepositoryInMemory.create({
            description: "test",
            name: "test"
        })

        // const specifications_id = ["1234"]
        const specifications_id = [specification.id]

        const specificationsCars = await createCarSpecificationUseCase.execute({
            car_id : car.id as string,
            specifications_id: specification.id as unknown as string[]
        })

        expect(specificationsCars).toHaveProperty("specifications")
        expect(specificationsCars.specifications.length).toBe(1)
    })
})