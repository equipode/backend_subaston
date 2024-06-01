import { AppDataSource } from "../../data-source";

export class ProductoController {
    async productos(req: any, res: any) {

        const result = await AppDataSource.query(
            'CALL sp_ObtenerProductos()'
        );

        return res.status(200).json({
            status: 'success',
            message: result[0]
        });

    }
}