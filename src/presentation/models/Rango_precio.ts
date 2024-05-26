import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Producto } from "./Producto";


@Entity('rango_precios')
export class RangoPrecio extends BaseEntity {

    @PrimaryGeneratedColumn()
    pk_rango: number;

    @Column("double")
    rango: number;

    @OneToMany(() => Producto, producto => producto.fk_rango_precio)
    productos: Producto[];

    @CreateDateColumn()
    createAt: Date;

    @UpdateDateColumn()
    updateAt: Date;
}