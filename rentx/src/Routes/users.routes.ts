import { Router } from "express";
import multer from "multer";
import uploadConfig from "../config/upload"
import { ensureAuthenticated } from "../Middlewares/ensureAuthenticated";
import { CreateUserController } from "../Modules/Accounts/useCases/createUser/CreateUserController";
import { UpdateUserAvatarController } from "../Modules/Accounts/useCases/updateUserAvatar/UpdateUserAvatarController";


const usersRoutes = Router()


const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"))


const createUserController = new CreateUserController()
const updateUserAvatarController = new UpdateUserAvatarController()


usersRoutes.post("/", createUserController.handle)

usersRoutes.patch("/avatar",ensureAuthenticated,uploadAvatar.single("avatar"), updateUserAvatarController.handle )

export { usersRoutes }