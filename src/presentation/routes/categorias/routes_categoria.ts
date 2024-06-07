import { Router } from "express";
import { CategoriaController } from "../../controllers/categorias/categoria.controller";

const categoriaController = new CategoriaController();

export class CategoriaRoutes {

    static get routes(): Router {

        const router = Router();

        //Definir Rutas principales
        router.get('/', categoriaController.categorias);

        return router;
    }

}