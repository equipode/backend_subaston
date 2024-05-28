import jwt from 'jwt-simple';
import moment from "moment";
import { secret } from "../services/jwt/jwt.service";

const secrets = secret;

//MIDLEWARE de autentication}
export const auth = (req: any, res: any, next: any) => {
    //Comprobar si me llega la cabezera de autenticacion
    if (!req.headers.authorization) {
        return res.status(403).json({
            status: 'error',
            message: 'la petición no tiene la cabezera de autenticación'
        });
    }

    let token = req.headers.authorization.replace(/['"]+/g, '');

    //Decodificar el token

    try {

        let payload = jwt.decode(token, secrets);

        //Comprobar Expiración del token
        if (payload <= moment().unix()) {
            return res.status(401).json({
                status: 'error',
                message: 'token expirado',
            });
        }

        //Agregar datos de usuario a request
        req.user = payload;

        //Pasar ejecucion de la accion

        next();

    } catch (error) {
        return res.status(404).json({
            status: 'error',
            message: 'token invalido',
            error
        });
    }


}