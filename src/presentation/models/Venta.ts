import { BaseEntity, Column, CreateDateColumn,  Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { MetodoPago } from "./Metodos_pago";
import { Cliente } from "./Cliente";
import { Producto } from "./Producto";
import { Chat } from "./Chats";

@Entity('ventas')
export class Venta extends BaseEntity{

    @PrimaryGeneratedColumn()
    pk_vent:number;

    @Column("date")
    fecha_venta: string;
    
    @Column("time")
    hora_venta: string;

    @Column("double")
    precio_compra: number;

    @ManyToOne(()=> MetodoPago, metodopago => metodopago.ventas)
    fk_metodo_pago: MetodoPago;

    @ManyToOne(()=> Cliente, cliente => cliente.ventas_vendedor)
    fk_cliente_vendedor: Cliente;
    
    @ManyToOne(()=> Cliente, cliente => cliente.ventas_comprador)
    fk_cliente_comprador: Cliente;
    
    @ManyToOne(() => Producto, producto => producto.ventas)
    fk_producto: Producto;

    @OneToMany(() => Chat, cha => cha.fk_venta)
    ventas: Chat[];

    @CreateDateColumn()
    createAt: Date;

    @UpdateDateColumn()
    updateAt: Date;
    
}
