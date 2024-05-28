import bcrypt from 'bcrypt';
import { User } from "../../models/User";
import { createToken } from '../../services/jwt/jwt.service';
export class AuthController {

    async login(req: any, res: any) {
        //Recoger datos de la petición
        let params = req.body;

        if (!params.usuario || !params.contrasenia) {
            return res.status(422).json({
                status: 'error',
                messaje: 'Faltan datos por enviar',
            });
        } else {
            const userValidate = await User.findOneBy({
                usuario: params.usuario,
            });

            if (userValidate) {
                //Comprobar su contraseña
                const pwd = bcrypt.compareSync(params.contrasenia, userValidate.contrasenia);

                if (!pwd) {
                    return res.status(400).json({
                        status: 'error',
                        message: 'password invalido'
                    });
                } else {
                    //Token
                    const Token = createToken(userValidate);

                    //Datos del usuario

                    return res.status(200).send({
                        status: 'success',
                        message: 'Te has identificado correctamente',
                        user: {
                            id: userValidate.id,
                            user: userValidate.usuario,
                            nick: userValidate.nit
                        },
                        Token

                    });
                }
            } else {
                return res.status(400).json({
                    status: 'error',
                    message: 'usuario invalido'
                });
            }

        }
    }
}