import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Producto } from "./Producto";
import { User } from "./User";

@Entity('subastas')
export class Subasta extends BaseEntity {
    @PrimaryGeneratedColumn()
    pk_sub: number;

    @Column("double")
    oferta: number;

    @Column("int")
    estado: boolean;

    @ManyToOne(() => Producto, producto => producto.productos)
    fk_product: Producto;

    @ManyToOne(() => User, user => user.subastas)
    fk_user: User;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}