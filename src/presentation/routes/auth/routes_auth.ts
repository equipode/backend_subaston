import { Router } from "express";
import { AuthController } from "../../controllers/auth/controller";

const authController = new AuthController();
export class AuthRoutes {

    static get routes(): Router {

        const router = Router();

        //Definir Rutas principales
        router.post('/login', authController.login);
        router.post('/register', (req, res) => {
            res.json('Register')
        });

        return router;
    }

}