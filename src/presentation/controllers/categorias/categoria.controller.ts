import { AppDataSource } from "../../data-source";

export class CategoriaController {
    async categorias(req: any, res: any) {

        const result = await AppDataSource.query(
            'SELECT * FROM categorias;'
        );

        return res.status(200).json({
            status: 'success',
            message: result
        });

    }
}