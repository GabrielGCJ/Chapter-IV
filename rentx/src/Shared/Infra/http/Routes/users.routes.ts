import { Router } from "express";
import multer from "multer";
import uploadConfig from "@config/upload"
import { ensureAuthenticated } from "@shared/Infra/http/Middlewares/ensureAuthenticated";
import { CreateUserController } from "@modules/Accounts/useCases/createUser/CreateUserController";
import { UpdateUserAvatarController } from "@modules/Accounts/useCases/updateUserAvatar/UpdateUserAvatarController";


const usersRoutes = Router()


const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"))


const createUserController = new CreateUserController()
const updateUserAvatarController = new UpdateUserAvatarController()


usersRoutes.post("/", createUserController.handle)

usersRoutes.patch("/avatar",ensureAuthenticated,uploadAvatar.single("avatar"), updateUserAvatarController.handle )

export { usersRoutes }