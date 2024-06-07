import { Router } from "express";
import { SubastaController } from "../../controllers/subastas/subasta.controller";


const subastasController = new SubastaController();

export class SubastaRoutes {

    static get routes(): Router{

        const router = Router();

        router.get('/usuariosLinea', subastasController.usuariosEnLinea);

        return router;
    }
}