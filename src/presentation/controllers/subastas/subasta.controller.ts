import { AppDataSource } from "../../data-source";


export class SubastaController {

    async usuariosEnLinea(req: any, res: any) {
        const totalDeUsuarios = await AppDataSource.query(
            'select count(*) as usuarios_en_linea from subastas where estado = 1;'
        );

        return res.status(200).json({
            status: 'success',
            message: Number(totalDeUsuarios[0].usuarios_en_linea)
        });

    }
}