import { Router } from "express";
import multer from "multer"
import { CreateCategoryControler } from "../Modules/Cars/useCases/createCategory/CreateCategoryControler";
import { ImportCategoryController } from "../Modules/Cars/useCases/importCategory/ImportCategoryController";
import { ListCategoriesController } from "../Modules/Cars/useCases/listCategories/ListCategoriesController";

const categoriesRoutes = Router();

const upload = multer({
    dest: "./tmp"
})

const createCategoryControler = new CreateCategoryControler
const importCategoryController = new ImportCategoryController
const listCategoriesController = new ListCategoriesController

categoriesRoutes.post("/",createCategoryControler.handle)

categoriesRoutes.get("/",listCategoriesController.handle)

categoriesRoutes.post("/import", upload.single("file") ,importCategoryController.handle)

export { categoriesRoutes }