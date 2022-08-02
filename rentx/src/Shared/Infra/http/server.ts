import "reflect-metadata"
import express, { NextFunction, Request, Response } from 'express';
import "express-async-errors"
import swaggerUi from 'swagger-ui-express'
import "@shared/Infra/typeorm"
import "@shared/Container"


// import { AppError } from "@errors/AppError";
// import { AppError } from "@erros/AppError";
// import { router  } from './Routes';


import { AppError } from "@shared/Errors/AppError";
import swaggerFile from '../../../swagger.json'
import { router } from "./Routes";


const app = express();

app.use(express.json())

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(router)

app.use((err: Error, request:Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
        return response.status(err.statusCode).json({
            message: err.message})
    }
    return response.status(500).json({
        status:"error",
        message:`Internal server error -> ${err.message}`
    })
})


app.listen(3333, () => console.log("Servidor está funcionando !!!!!!"));