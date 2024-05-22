import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";


@Entity('role')
export class Role extends BaseEntity {

    @PrimaryGeneratedColumn()
    pk_rol: number;

    @Column()
    tipo: number;

    @Column()
    nombre_rol: string;

    @Column()
    descrip_rol: string;

    @OneToMany(() => User, user => user.fk_rol)
    users: User[];
}