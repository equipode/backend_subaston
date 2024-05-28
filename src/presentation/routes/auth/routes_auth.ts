import { Router } from "express";
import { AuthController } from "../../controllers/auth/controller";
import { auth } from "../../middlewares/auth.middlewar";

const authController = new AuthController();
export class AuthRoutes {

    static get routes(): Router {

        const router = Router();

        //Definir Rutas principales
        router.post('/login', authController.login);
        router.post('/register', auth, (req, res) => {
            res.json('Register')
        });

        return router;
    }

}