import "reflect-metadata"
import { DataSource } from "typeorm"
import { Cliente } from "./entity/Cliente"
import { Role } from "./entity/Role"
import { Ubicacion } from "./entity/Ubicaciones"
import { User } from "./entity/User"


export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123456789",
    database: "db_subaston_pro",
    synchronize: true,
    logging: false,
    entities: [Role, User, Ubicacion, Cliente],
    migrations: [],
    subscribers: [],
})
