import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";


@Entity('roles')
export class Role extends BaseEntity {

    @PrimaryGeneratedColumn()
    pk_rol: number;

    @Column("int")
    tipo: number;

    @Column("char", { length: 50 })
    nombre_rol: string;

    @Column("char", { length: 60 })
    descrip_rol: string;

    @OneToMany(() => User, user => user.fk_rol)
    users: User[];
}