import Router from "express";
import UserController from "./UserController.js";

const regRouter = new Router();

regRouter.post(`/`, UserController.create);

export default regRouter;