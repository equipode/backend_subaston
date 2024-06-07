import { AppDataSource } from "../../data-source";

export class RangoPrecioController {
    async rangos_precios(req: any, res: any) {

        const result = await AppDataSource.query(
            'SELECT * FROM rango_precios;'
        );

        return res.status(200).json({
            status: 'success',
            message: result
        });

    }
}