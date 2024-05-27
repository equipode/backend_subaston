import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Producto } from "./Producto";


@Entity('categorias')
export class Categoria extends BaseEntity {

    @PrimaryGeneratedColumn()
    pk_categor: number;

    @Column("char", { length: 50 })
    nombre_categor: string;

    @OneToMany(() => Producto, producto => producto.fk_categoria)
    productos: Producto[];

    @CreateDateColumn()
    createAt: Date;

    @UpdateDateColumn()
    updateAt: Date;
}