import express from 'express';
import mongoose from "mongoose";
//import bodyParser from "body-parser";
import regRouter from "./regRouter.js";
import {check} from "express-validator"

const app = express();
const PORT = 5000;

const BD_URL = `mongodb+srv://danil:danylo.bielytskyi@cluster0.7n2is.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

app.use(express.urlencoded({ extended: false }))
app.use(express.json());
app.use(express.text());


app.use(`/`, express.static(`./static`))

app.use('/api/registration',[
    check(`name`, `Имя пользователя не введено!`).notEmpty(),
    check(`surname`, `Фамилия пользователя не введена!`).notEmpty(),
    check(`email`, `Ошибка ввода почты!`).notEmpty().isEmail(),
    check(`password`, `Пароль должен иметь минимум 5 символов и максимум 30`).notEmpty().isLength({min:5,max:30}),
], regRouter);


async function startApp(){
    try {
        app.listen(PORT);
        await mongoose.connect(BD_URL);
    } catch (e){
        console.log(e);
    }
}

startApp()

