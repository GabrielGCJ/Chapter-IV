import { Router } from "express";
import { CreateCarController } from "@modules/Cars/useCases/createCar/CreateCarController";
import { CreateCarSpecificationController } from "@modules/Cars/useCases/createCarSpecification/CreateCarSpecificationController";
import { ListAvailableCarsController } from "@modules/Cars/useCases/listAvailableCars/ListAvailableController";

import { ensureAdmin } from "../Middlewares/ensureAdmin";
import { ensureAuthenticated } from "../Middlewares/ensureAuthenticated";

const carsRoutes = Router();

const createCarController = new CreateCarController();
const listAvailableCarsController = new ListAvailableCarsController()
const createCarSpecificationController =  new CreateCarSpecificationController()

carsRoutes.post( "/", ensureAuthenticated, ensureAdmin, createCarController.handle );

carsRoutes.get("/available",listAvailableCarsController.handle)

carsRoutes.post("/specifications/:id",ensureAuthenticated, ensureAdmin,
createCarSpecificationController.handle)

export { carsRoutes };