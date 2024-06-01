import { Router } from "express";
import { AuthController } from "../../controllers/auth/auth.controller";
import { UserController } from "../../controllers/users/user.controller";
import { authMildleware } from "../../middlewares/auth.middlewar";

const authController = new AuthController();
const userController = new UserController();
export class AuthRoutes {

    static get routes(): Router {

        const router = Router();

        //Definir Rutas principales
        router.post('/login', authController.login);
        router.post('/crearUser', userController.crearUser);
        router.post('/pruebas', authMildleware, (req, res) => {
            res.json('Register')
        });

        return router;
    }

}