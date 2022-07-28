import { AppError } from "../../../../Errors/AppError";
import { ICreateUserDTO } from "../../DTOs/ICreateUserDTO";
import { UsersRepositoryInMemory } from "../../Repositories/in-memory/UsersRepositoryInMemory"
import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase"



let authenticateUserUseCase: AuthenticateUserUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserUseCase : CreateUserUseCase


describe("Authenticate User",  () => {
    
    beforeEach(() => {
        usersRepositoryInMemory = new UsersRepositoryInMemory()
        authenticateUserUseCase = new AuthenticateUserUseCase(usersRepositoryInMemory)
        createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory)
    })

    it("should be able to authenticate an user", async () => {
        const user: ICreateUserDTO = {
            driver_license:"874984729487298",
            email:"user@test.com",
            password:"1234",
            name:"User Test"
        }
        await createUserUseCase.execute(user)

        const result = await authenticateUserUseCase.execute({
            email: user.email,
            password: user.password
        })

        // console.log(result)

        expect(result).toHaveProperty("token")
    })


    it("should not be able to authenticate an nonexistent user", () => {

        expect( async () => {
            await authenticateUserUseCase.execute({
                email: "false@email.com",
                password: "1234"
            })
        }).rejects.toBeInstanceOf(AppError)
    })


    it("should not be able to authenticate with incorrect password",() => {
        expect( async () => {
            const user: ICreateUserDTO = {
                driver_license: "9999",
                email: "user@user.com",
                password:"1234",
                name:"User Test Error"
            }

            await createUserUseCase.execute(user)

            await authenticateUserUseCase.execute({
                email:user.email,
                password:"4321"
            })
        }).rejects.toBeInstanceOf(AppError)
    })
})