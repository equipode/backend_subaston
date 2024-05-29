import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Cliente } from "./Cliente";
import { Producto } from "./Producto";
import { User } from "./User";

@Entity('ubicaciones')
export class Ubicacion extends BaseEntity {

    @PrimaryGeneratedColumn()
    pk_ubic: number;

    @Column("char", { length: 20 })
    departamento: string;

    @Column("char", { length: 20 })
    ciudad: string;

    @Column()
    fk_user: number;

    @ManyToOne(() => User, user => user.ubicaciones)
    @JoinColumn({ name: "fk_user" })
    user: User;

    @OneToMany(() => Cliente, cliente => cliente.fk_user)
    clientes: Cliente[];

    @OneToMany(() => Producto, producto => producto.fk_ubicacion)
    productos: Producto[];

    @CreateDateColumn()
    createAt: Date;

    @UpdateDateColumn()
    updateAt: Date;

}