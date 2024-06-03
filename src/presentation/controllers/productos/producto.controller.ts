import { io } from "../../../app";
import { AppDataSource } from "../../data-source";
import { Producto } from "../../models/Producto";

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

    async crearProducto(req: any, res: any) {

        //Recoger datos de la petición
        let params = req.body;

        //Validar datos
        if (
            !params.nombre_product || !params.precio_base || !params.antiguedad || !params.imagen ||
            !params.descripcion || !params.cantidad || !params.estado_mostrador || !params.fecha_subasta ||
            !params.hora_subasta || !params.fk_categoria || !params.fk_rango_precio || !params.fk_user || !params.fk_ubicacion
        ) {
            return res.status(422).json({
                status: 'error',
                message: 'Faltan datos por enviar'
            });
        } else {
            const productoValidate = await Producto.findOneBy({
                fk_user: params.fk_user,
                nombre_product: params.nombre_product
            });

            if (!productoValidate) {
                const producto = new Producto();
                producto.nombre_product = params.nombre_product;
                producto.precio_base = params.precio_base;
                producto.antiguedad = params.antiguedad;
                producto.imagen = params.imagen;
                producto.descripcion = params.descripcion;
                producto.cantidad = params.cantidad;
                producto.estado_mostrador = params.estado_mostrador;
                producto.fecha_subasta = params.fecha_subasta;
                producto.hora_subasta = params.hora_subasta;
                producto.fk_categoria = params.fk_categoria;
                producto.fk_rango_precio = params.fk_rango_precio;
                producto.fk_user = params.fk_user;
                producto.fk_ubicacion = params.fk_ubicacion;

                await producto.save();


                io?.emit('nuevo_producto', producto);

                return res.status(200).json({
                    status: 'success',
                    message: 'Producto creado correctamente',
                    data: producto
                });
            } else {
                return res.status(400).json({
                    status: 'success',
                    message: 'El producto ya existe'
                });
            }
        }
    }
}