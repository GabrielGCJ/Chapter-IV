import { Router } from "express";
import { ensureAuthenticated } from "@shared/Infra/http/Middlewares/ensureAuthenticated";
import { CreateSpecificationController } from "@modules/Cars/useCases/createSpecification/CreateSpecificationController";


const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController()

specificationsRoutes.use(ensureAuthenticated)

specificationsRoutes.post("/",createSpecificationController.handle)

export { specificationsRoutes }