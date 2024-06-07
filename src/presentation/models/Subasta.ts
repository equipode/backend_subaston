import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
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

    @Column()
    fk_product: number;

    @ManyToOne(() => Producto, producto => producto.productos)
    @JoinColumn({ name: "fk_product" })
    product: Producto;

    @Column()
    fk_user: number;

    @ManyToOne(() => User, user => user.subastas)
    @JoinColumn({ name: "fk_user" })
    user: User;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}