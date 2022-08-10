import { UsersRepository } from "@modules/Accounts/Infra/typeorm/repositories/UsersRepository";
import { AppError } from "@shared/Errors/AppError";
import { NextFunction, request, Request, Response } from "express";


export async function ensureAdmin(
    request: Request, response: Response, next: NextFunction
){
    const { id } = request.user

    const userRepository = new UsersRepository();
    const user = await userRepository.findById(id)

    if(!user.isAdmin) {throw new AppError("User is not admin!")}

    return next()
}