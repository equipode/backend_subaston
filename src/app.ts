import { AppRoutes } from "./presentation/routes/routes";
import { Server } from "./presentation/server";



(() => {
    main();
})()

async function main() {
    //todo: await base de datos

    //todo: inicio de nuestro server
    new Server({
        port: 3100,
        routes: AppRoutes.routes
    }).start()
}