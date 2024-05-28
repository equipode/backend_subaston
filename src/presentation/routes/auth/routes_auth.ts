import { Router } from "express";
import { AuthController } from "../../controllers/auth/auth.controller";
import { UserController } from "../../controllers/users/user.controller";

const authController = new AuthController();
const userController = new UserController();
export class AuthRoutes {

    static get routes(): Router {

        const router = Router();

        //Definir Rutas principales
        router.post('/login', authController.login);
        router.post('/register', userController.crearUser);
        // router.post('/register', auth, (req, res) => {
        //     res.json('Register')
        // });

        return router;
    }

}