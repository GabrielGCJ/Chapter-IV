import { AppError } from "@shared/Errors/AppError"
import { CategoriesRepositoryInMemory } from "../../Repositories/in-memory/CategoriesRepositoryInMemory"
import { CreateCategoryUseCase } from "./CreateCategoryUseCase"


let createCategoryUseCase: CreateCategoryUseCase
let categoriesRepositoryInMemory: CategoriesRepositoryInMemory

describe("Create Category",() => {
    categoriesRepositoryInMemory = new CategoriesRepositoryInMemory()
    createCategoryUseCase = new CreateCategoryUseCase(categoriesRepositoryInMemory)   

        it("should be able to create a new category", async () => {

            const category = {
                name:"Category Test",
                description: "Category description test"
            }
        
            await createCategoryUseCase.execute({
                name:category.name,
                description:category.description
            })

            const categoryCreated = await categoriesRepositoryInMemory.findByName(category.name)

            console.log(categoryCreated)

            expect(categoryCreated).toHaveProperty("id")
        });    
        
        
        it("should not be able to create a new category with name exists", async () => {

            expect(async () => {
    
                const category = {
                    name:"Category Test",
                    description: "Category description test"
                }
              
                await createCategoryUseCase.execute({
                    name:category.name,
                    description:category.description
                })
        
                await createCategoryUseCase.execute({
                    name:category.name,
                    description:category.description
                })    
    
            }).rejects.toBeInstanceOf(AppError)        
        })
    })
















    // it("should not be able to create a new category with name exists", async () => {

    //     expect(async () => {

    //         const category = {
    //             name:"Category Test",
    //             description: "Category description test"
    //         }
          
    //         await createCategoryUseCase.execute({
    //             name:category.name,
    //             description:category.description
    //         })
    
    //         await createCategoryUseCase.execute({
    //             name:category.name,
    //             description:category.description
    //         })


    //     }).rejects.toBeInstanceOf(AppError)        
    // })
// })