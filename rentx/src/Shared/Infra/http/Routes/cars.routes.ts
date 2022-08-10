import { Router } from "express";
import { CreateCarController } from "@modules/Cars/useCases/createCar/CreateCarController";
import { ensureAuthenticated } from "../Middlewares/ensureAuthenticated";
import { ensureAdmin } from "../Middlewares/ensureAdmin";

const carsRoutes = Router();

const createCarController = new CreateCarController();

carsRoutes.post( "/", ensureAuthenticated, ensureAdmin, createCarController.handle );

export { carsRoutes };