import "reflect-metadata";
import { DataSource } from "typeorm";
import { config } from "./config/config";
import { Categoria } from "./models/Categoria";
import { Cliente } from "./models/Cliente";
import { Producto } from "./models/Producto";
import { RangoPrecio } from "./models/Rango_precio";
import { Role } from "./models/Role";
import { Subasta } from "./models/Subasta";
import { Ubicacion } from "./models/Ubicaciones";
import { User } from "./models/User";
import { MetodoPago} from "./models/Metodos_pago";
import { Venta } from "./models/Venta";


export const AppDataSource = new DataSource({
    type: "mysql",
    host: config.dbHost,
    port: Number(config.dbPort),
    username: config.dbuser,
    password: config.dbPassword,
    database: config.dbName,
    synchronize: true,
    logging: false,
    entities: [Role, User, Ubicacion, Cliente, Categoria, RangoPrecio, Producto, Subasta, MetodoPago, Venta],
    migrations: [],
    subscribers: [],
});
