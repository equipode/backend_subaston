import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Categoria } from "./Categoria";
import { RangoPrecio } from "./Rango_precio";
import { Subasta } from "./Subasta";
import { Ubicacion } from "./Ubicaciones";
import { User } from "./User";

@Entity('productos')
export class Producto extends BaseEntity {

    @PrimaryGeneratedColumn()
    pk_prod: number;

    @Column("char", { length: 50 })
    nombre_product: string;

    @Column("double")
    precio_base: number;

    @Column("varchar", { length: 30 })
    antiguedad: string;

    @Column("varchar", { length: 250 })
    imagen: string;

    @Column("varchar", { length: 160 })
    descripcion: string;

    @Column("int")
    cantidad: number;

    @Column("int")
    estado_mostrador: boolean;

    @Column("date")
    fecha_subasta: string;

    @Column("time")
    hora_subasta: string;

    @ManyToOne(() => Categoria, categoria => categoria.productos)
    fk_categoria: Categoria;

    @ManyToOne(() => RangoPrecio, rango_precio => rango_precio.productos)
    fk_rango_precio: RangoPrecio;

    @ManyToOne(() => User, user => user.productos)
    fk_user: User;

    @ManyToOne(() => Ubicacion, ubicacion => ubicacion.productos)
    fk_ubicacion: Ubicacion;

    @OneToMany(() => Subasta, subasta => subasta.fk_product)
    productos: Subasta[];

    @CreateDateColumn()
    createAt: Date;

    @UpdateDateColumn()
    updateAt: Date;
}