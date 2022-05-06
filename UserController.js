import UserService from "./UserService.js";
import {validationResult} from "express-validator";
import {hashPassword} from "./hashPassword.js";

class UserController {
    async create(req, res) {
        try{
            const errors = validationResult(req);
            if(!errors.isEmpty()){
                return res.status(400).json({message:"Ошибка при регистрации", errors})
            }

            await hashPassword(req.body);
            console.log(req.body)

            const createdUser = await UserService.create(req.body);
            res.status(200).json(createdUser)
        } catch (e) {
            res.status(500).json(e);
        }
    }
    async read(req, res){}

    async update(req, res){}

    async delete(req, res){}
}

export default new UserController()
