import express, { Router } from 'express';
import { AppDataSource } from './data-source';

interface Options {
    port?: number;
    routes: Router
}


export class Server {

    public readonly app = express();
    private readonly port: number;
    private readonly routes: Router;

    constructor(options: Options) {
        const { port = 3100, routes } = options;
        this.port = port;
        this.routes = routes;
    }


    async start() {
        await AppDataSource.initialize();
        //Usar las rutas
        this.app.use(this.routes);

        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        })
    }

}