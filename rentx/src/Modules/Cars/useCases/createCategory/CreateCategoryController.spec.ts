import  request  from "supertest";

import { app } from "@shared/Infra/http/app";

describe("Create Category Controller", async () => {


    it("should be able to create a new category", async () => {
        const response = await request(app).post("/categories")
        .send({
            name:"Categories Supertest",
            description:"Categories Supertest"
        })
        expect(response.status).toBe(201)
    })    
})