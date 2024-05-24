import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Cliente } from "./Cliente";
import { User } from "./User";

@Entity('ubicaciones')
export class Ubicacion extends BaseEntity {

    @PrimaryGeneratedColumn()
    pk_ubic: number;

    @Column("char", { length: 20 })
    departamento: string;

    @Column("char", { length: 20 })
    ciudad: string;

    @ManyToOne(() => User, user => user.ubicaciones)
    fk_user: User;

    @OneToMany(() => Cliente, cliente => cliente.fk_user)
    clientes: Cliente[];

    @CreateDateColumn()
    createAt: Date;

    @UpdateDateColumn()
    updateAt: Date;

}