
import { app } from "@shared/Infra/http/app";
import  request  from "supertest";

describe("Create Category Controller", async () => {


    it("test", async () => {
        await request(app).get("/cars/available").expect(200)
    })



    await request(app).get("/cars/available").expect(200)
})