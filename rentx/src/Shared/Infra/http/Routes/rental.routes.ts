import { Router } from "express";
import { CreateRentalController } from "@modules/Rentals/useCases/createRental/CreateRentalController";
import { ensureAuthenticated } from "../Middlewares/ensureAuthenticated";
import { ensureAdmin } from "../Middlewares/ensureAdmin";

const rentalRoutes = Router()


const createRentalController = new CreateRentalController()


rentalRoutes.post("/",ensureAuthenticated, createRentalController.handle)

export { rentalRoutes }