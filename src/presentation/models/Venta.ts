import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Chat } from "./Chats";
import { Cliente } from "./Cliente";
import { MetodoPago } from "./Metodos_pago";
import { Producto } from "./Producto";

@Entity('ventas')
export class Venta extends BaseEntity {

    @PrimaryGeneratedColumn()
    pk_vent: number;

    @Column("date")
    fecha_venta: string;

    @Column("time")
    hora_venta: string;

    @Column("double")
    precio_compra: number;

    @Column()
    fk_metodo_pago: number;

    @ManyToOne(() => MetodoPago, metodopago => metodopago.ventas)
    @JoinColumn({ name: "fk_metodo_pago" })
    metodo_pago: MetodoPago;

    @Column()
    fk_cliente_vendedor: number;

    @ManyToOne(() => Cliente, cliente => cliente.ventas_vendedor)
    @JoinColumn({ name: "fk_cliente_vendedor" })
    cliente_vendedor: Cliente;

    @Column()
    fk_cliente_comprador: number;

    @ManyToOne(() => Cliente, cliente => cliente.ventas_comprador)
    @JoinColumn({ name: "fk_cliente_comprador" })
    cliente_comprador: Cliente;

    @Column()
    fk_producto: number;

    @ManyToOne(() => Producto, producto => producto.ventas)
    @JoinColumn({ name: "fk_producto" })
    producto: Producto;

    @OneToMany(() => Chat, cha => cha.fk_venta)
    ventas: Chat[];

    @CreateDateColumn()
    createAt: Date;

    @UpdateDateColumn()
    updateAt: Date;

}
