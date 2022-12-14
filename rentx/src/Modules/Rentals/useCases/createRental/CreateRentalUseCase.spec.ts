import dayjs from "dayjs"



import { RentalsRepositoryInMemory } from "@modules/Rentals/Repositories/in-memory/RentalsRepositoryInMemory"
import { DayjsDateProvider } from "@shared/Container/providers/DateProvider/implementations/DayjsDateProvider"
import { AppError } from "@shared/Errors/AppError"
import { CreateRentalUseCase } from "./CreateRentalUseCase"


let createRentalUseCase : CreateRentalUseCase
let rentalsRepositoryInMemory : RentalsRepositoryInMemory
let dayjsDateProvider: DayjsDateProvider

describe("Create Rental", () => {

    const dayAdd24hrs = dayjs().add(1, "day").toDate()

    beforeEach(() => {
        rentalsRepositoryInMemory = new RentalsRepositoryInMemory()
        dayjsDateProvider = new DayjsDateProvider()
        createRentalUseCase = new CreateRentalUseCase(
            rentalsRepositoryInMemory,
            dayjsDateProvider
        )
    })

    it("should be able to create a new rental", async () => {
        const rental = await createRentalUseCase.execute({
            user_id: "12345",
            car_id:"121212",
            expected_return_date: dayAdd24hrs 
        })

        expect(rental).toHaveProperty("id")
        expect(rental).toHaveProperty("start_date")
    })

    it("should not be able to create a new rental if there is another open to the same user", async () => {            
        expect( async () => {
            await createRentalUseCase.execute({
                user_id: "123456",
                car_id:"teste123",
                expected_return_date: dayAdd24hrs
            })             
            
            await createRentalUseCase.execute({
                user_id: "123456",
                car_id:"teste123",
                expected_return_date: dayAdd24hrs
            })
        }).rejects.toBeInstanceOf(AppError)      
    })

    it("should not be able to create a new rental if there is another open to the same car", async () => {            
        expect( async () => {
            await createRentalUseCase.execute({
                user_id: "123",
                car_id:"teste",
                expected_return_date: dayAdd24hrs
            })             
            
            await createRentalUseCase.execute({
                user_id: "321",
                car_id:"teste",
                expected_return_date: dayAdd24hrs
            })
        }).rejects.toBeInstanceOf(AppError)      
    })

    it("should not be able to create a new rental with invalid return", async () => {            
        expect( async () => {
            await createRentalUseCase.execute({
                user_id: "123",
                car_id:"teste",
                expected_return_date: dayjs().toDate()
            })             
            
            
        }).rejects.toBeInstanceOf(AppError)      
    })
})