import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Categoria } from "./Categoria";
import { RangoPrecio } from "./Rango_precio";
import { Subasta } from "./Subasta";
import { Ubicacion } from "./Ubicaciones";
import { User } from "./User";
import { Venta } from "./Venta";

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

    @Column()
    fk_categoria: number;

    @ManyToOne(() => Categoria, categoria => categoria.productos)
    @JoinColumn({ name: "fk_categoria" })
    categoria: Categoria;

    @Column()
    fk_rango_precio: number;

    @ManyToOne(() => RangoPrecio, rango_precio => rango_precio.productos)
    @JoinColumn({ name: "fk_rango_precio" })
    rango_precio: RangoPrecio;

    @Column()
    fk_user: number;

    @ManyToOne(() => User, user => user.productos)
    @JoinColumn({ name: "fk_user" })
    user: User;

    @Column()
    fk_ubicacion: number;

    @ManyToOne(() => Ubicacion, ubicacion => ubicacion.productos)
    @JoinColumn({ name: "fk_ubicacion" })
    ubicacion: Ubicacion;

    @OneToMany(() => Subasta, subasta => subasta.fk_product)
    productos: Subasta[];

    @OneToMany(() => Venta, venta => venta.fk_producto)
    ventas: Venta[];

    @CreateDateColumn()
    createAt: Date;

    @UpdateDateColumn()
    updateAt: Date;
}