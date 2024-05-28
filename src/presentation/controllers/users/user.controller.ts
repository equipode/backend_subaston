import bcrypt from "bcrypt";
import { User } from "../../models/User";

export class UserController {



    async crearUser(req: any, res: any) {

        //Recoger datos de la petición
        let params = req.body;

        //Comprobar que me llega bien (+ validación)
        if (!params.usuario || !params.nit || !params.contrasenia || !params.foto_perfil || !params.fk_rol) {
            return res.status(422).json({
                status: 'error',
                messaje: 'Faltan datos por enviar',
            });
        } else {
            const userValidate = await User.findOneBy({
                usuario: params.usuario
            });

            if (!userValidate) {
                bcrypt.hash(params.contrasenia, 10).then((pwd) => {
                    const user = new User();
                    user.usuario = params.usuario;
                    user.nit = params.nit;
                    user.contrasenia = pwd;
                    user.foto_perfil = params.foto_perfil;
                    user.fk_rol = params.fk_rol;
                    user.save();
                    return res.status(200).json({
                        status: 'success',
                        messaje: 'Usuario Registrado',
                        user
                    });
                }).catch((error) => {

                });
            } else {
                return res.status(200).json({
                    status: 'success',
                    message: 'El usuario ya existe'
                });
            }
        }
    }
}