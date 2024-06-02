import { Router } from "express";
import { authMildleware } from "../middlewares/auth.middlewar";
import { AuthRoutes } from "./auth/routes_auth";
import { ProductoRoutes } from "./productos/routes_product";
import { SubastaRoutes } from "./subastas/routes_subasta";


export class AppRoutes {

    static get routes(): Router {

        const router = Router();

        //Definir Rutas principales
        router.use('/api/v1/auth', AuthRoutes.routes);
        router.use('/api/v1/producto', authMildleware, ProductoRoutes.routes);
        router.use('/api/v1/subasta', authMildleware, SubastaRoutes.routes);
        return router;
    }

}