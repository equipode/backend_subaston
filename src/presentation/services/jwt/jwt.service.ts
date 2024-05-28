import jwt from "jwt-simple";
import moment from "moment";

export const secret = "ClaveSecddSD_W_ddj_FGS12";

//Crear una funcion para generar tokens
// todo poner interfas
const createToken = (user: any) => {
    const payload = {
        id: user._id,
        name: user.name,
        surname: user.surname,
        nick: user.nick,
        email: user.email,
        role: user.role,
        imagen: user.image,
        iat: moment().unix(),
        exp: moment().add(30, 'days').unix()
    };

    return jwt.encode(payload, secret);

}