import { Router } from "express";
import { RangoPrecioController } from "../../controllers/rango_precios/rango_precio.controller";

const rangoPrecioController = new RangoPrecioController();

export class RangoPrecioRoutes {

    static get routes(): Router {

        const router = Router();

        //Definir Rutas principales
        router.get('/', rangoPrecioController.rangos_precios);

        return router;
    }

}