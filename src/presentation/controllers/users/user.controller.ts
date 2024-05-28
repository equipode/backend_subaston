import { User } from "../../models/User";

export class UserController {



    async crearUser(req: any, res: any) {
        const user = new User();
        user.usuario = 'everardoorozcocarmona@gmail.com';
        user.nit = 'santi';
        user.contrasenia = '433uee';
        user.foto_perfil = 'foto123';
        user.fk_rol = 1;
        await user.save();
        return res.json({
            message: user
        });
    }
}