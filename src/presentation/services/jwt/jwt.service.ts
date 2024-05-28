import jwt from "jwt-simple";
import moment from "moment";
import { Users } from "../../interfaces/users/user.interface";

export const secret = "ClaveSecddSD_W_ddj_FGS12";

//Crear una funcion para generar tokens
export const createToken = (user: Users) => {
    const payload = {
        id: user.id,
        nick: user.nit,
        email: user.usuario,
        role: user.fk_rol,
        imagen: user.foto_perfil,
        iat: moment().unix(),
        exp: moment().add(30, 'days').unix()
    };

    return jwt.encode(payload, secret);

}