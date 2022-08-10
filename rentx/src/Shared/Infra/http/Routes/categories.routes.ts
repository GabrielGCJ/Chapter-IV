import { Router } from "express";
import multer from "multer"
import { CreateCategoryControler } from "@modules/Cars/useCases/createCategory/CreateCategoryControler";
import { ImportCategoryController } from "@modules/Cars/useCases/importCategory/ImportCategoryController";
import { ListCategoriesController } from "@modules/Cars/useCases/listCategories/ListCategoriesController";
import { ensureAuthenticated } from "@shared/Infra/http/Middlewares/ensureAuthenticated";
import { ensureAdmin } from "@shared/Infra/http/Middlewares/ensureAdmin";

const categoriesRoutes = Router();

const upload = multer({
    dest: "./tmp"
})

const createCategoryControler = new CreateCategoryControler
const importCategoryController = new ImportCategoryController
const listCategoriesController = new ListCategoriesController

categoriesRoutes.post("/",
ensureAuthenticated,
ensureAdmin,
createCategoryControler.handle)

categoriesRoutes.get("/",listCategoriesController.handle)

categoriesRoutes.post("/import",
upload.single("file"),
ensureAuthenticated,
ensureAdmin,
importCategoryController.handle)

export { categoriesRoutes }