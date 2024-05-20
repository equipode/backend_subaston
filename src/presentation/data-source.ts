import "reflect-metadata"
import { DataSource } from "typeorm"


export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123456789",
    database: "db_subaston",
    synchronize: true,
    logging: false,
    entities: [],
    migrations: [],
    subscribers: [],
})
