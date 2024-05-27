import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Venta } from "./Venta";

@Entity('metodos_pago')
export class MetodoPago extends BaseEntity {

    @PrimaryGeneratedColumn()
    pk_metodo: number;

    @Column("char", {length:50})
    nombre_metodo: string;

    @OneToMany(()=> Venta, venta => venta.fk_metodo_pago )
    ventas: Venta[];

    @CreateDateColumn()
    createAt: Date;

    @UpdateDateColumn()
    updateAt:Date;
}