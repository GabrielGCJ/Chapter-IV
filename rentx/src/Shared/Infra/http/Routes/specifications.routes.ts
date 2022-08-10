import { Router } from "express";
import { CreateSpecificationController } from "@modules/Cars/useCases/createSpecification/CreateSpecificationController";
import { ensureAuthenticated } from "@shared/Infra/http/Middlewares/ensureAuthenticated";
import { ensureAdmin } from "@shared/Infra/http/Middlewares/ensureAdmin";


const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController()

specificationsRoutes.use(ensureAuthenticated)

specificationsRoutes.post("/",
ensureAuthenticated,
ensureAdmin,
createSpecificationController.handle)

export { specificationsRoutes }