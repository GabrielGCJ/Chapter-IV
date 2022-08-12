import { Router } from "express";
import { CreateCarController } from "@modules/Cars/useCases/createCar/CreateCarController";
import { ListAvailableCarsController } from "@modules/Cars/useCases/listAvailableCars/listAvailableController";
import { ensureAuthenticated } from "../Middlewares/ensureAuthenticated";
import { ensureAdmin } from "../Middlewares/ensureAdmin";

const carsRoutes = Router();

const createCarController = new CreateCarController();
const listAvailableCarsController = new ListAvailableCarsController


carsRoutes.post( "/", ensureAuthenticated, ensureAdmin, createCarController.handle );

carsRoutes.get("/available",listAvailableCarsController.handle)

export { carsRoutes };