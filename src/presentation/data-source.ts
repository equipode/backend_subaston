import "reflect-metadata";
import { DataSource } from "typeorm";
import { config } from "./config/config";
import { Cliente } from "./models/Cliente";
import { Role } from "./models/Role";
import { Ubicacion } from "./models/Ubicaciones";
import { User } from "./models/User";


export const AppDataSource = new DataSource({
    type: "mysql",
    host: config.dbHost,
    port: Number(config.dbPort),
    username: config.dbuser,
    password: config.dbPassword,
    database: config.dbName,
    synchronize: true,
    logging: false,
    entities: [Role, User, Ubicacion, Cliente],
    migrations: [],
    subscribers: [],
})
