import { Router } from "express";
import multer from "multer";
import uploadConfig from "@config/upload"
import { CreateCarController } from "@modules/Cars/useCases/createCar/CreateCarController";
import { CreateCarSpecificationController } from "@modules/Cars/useCases/createCarSpecification/CreateCarSpecificationController";
import { ListAvailableCarsController } from "@modules/Cars/useCases/listAvailableCars/ListAvailableController";
import { UploadCarImagesController } from "@modules/Cars/useCases/uploadCarImages/UploadCarImagesController";

import { ensureAdmin } from "../Middlewares/ensureAdmin";
import { ensureAuthenticated } from "../Middlewares/ensureAuthenticated";

const carsRoutes = Router();

const createCarController = new CreateCarController();
const listAvailableCarsController = new ListAvailableCarsController()
const createCarSpecificationController =  new CreateCarSpecificationController()
const uploadCarImagesController = new UploadCarImagesController()

const upload = multer(uploadConfig.upload("./tmp/cars"))


carsRoutes.post( "/", ensureAuthenticated, ensureAdmin, createCarController.handle );

carsRoutes.get("/available",listAvailableCarsController.handle)

carsRoutes.post("/specifications/:id",ensureAuthenticated, ensureAdmin,
createCarSpecificationController.handle)

carsRoutes.post("/images/:id", ensureAuthenticated, ensureAdmin,upload.array("images"), uploadCarImagesController.handle)

export { carsRoutes };