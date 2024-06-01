import { Router } from "express";
import { ProductoController } from "../../controllers/productos/producto.controller";

const productController = new ProductoController();

export class ProductoRoutes {

    static get routes(): Router {

        const router = Router();

        //Definir Rutas principales
        router.get('/', productController.productos);

        return router;
    }

}