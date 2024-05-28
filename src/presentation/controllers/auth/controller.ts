export class AuthController {

    login(req: any, res: any) {
        return res.json({
            message: 'Login'
        });
    }
}