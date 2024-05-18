import { Router } from "express";
import { AuthRoutes } from "./auth/routes_auth";


export class AppRoutes {

    static get routes(): Router {

        const router = Router();

        //Definir Rutas principales
        router.use('/api/v1/auth', AuthRoutes.routes);
        return router;
    }

}