import { Router } from "express";
import multer from "multer"
import { CreateCategoryController } from "@modules/Cars/useCases/createCategory/CreateCategoryController";
import { ImportCategoryController } from "@modules/Cars/useCases/importCategory/ImportCategoryController";
import { ListCategoriesController } from "@modules/Cars/useCases/listCategories/ListCategoriesController";
import { ensureAuthenticated } from "@shared/Infra/http/Middlewares/ensureAuthenticated";
import { ensureAdmin } from "@shared/Infra/http/Middlewares/ensureAdmin";

const categoriesRoutes = Router();

const upload = multer({
    dest: "./tmp"
})

const createCategoryController = new CreateCategoryController
const importCategoryController = new ImportCategoryController
const listCategoriesController = new ListCategoriesController

categoriesRoutes.post("/",
ensureAuthenticated,
ensureAdmin,
createCategoryController.handle)

categoriesRoutes.get("/",listCategoriesController.handle)

categoriesRoutes.post("/import",
upload.single("file"),
ensureAuthenticated,
ensureAdmin,
importCategoryController.handle)

export { categoriesRoutes }