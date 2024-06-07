import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Ubicacion } from "./Ubicaciones";
import { User } from "./User";
import { Venta } from "./Venta";

@Entity('clientes')
export class Cliente extends BaseEntity {

    @PrimaryGeneratedColumn()
    pk_client: number;

    @Column("char", { length: 50 })
    nombre: string;

    @Column("char", { length: 50 })
    apellido: string;

    @Column()
    fk_ubicacion: number;

    @ManyToOne(() => Ubicacion, ubicacion => ubicacion.clientes)
    @JoinColumn({ name: "fk_ubicacion" })
    ubicacion: Ubicacion;

    @Column()
    fk_user: number;

    @ManyToOne(() => User, user => user.clientes)
    @JoinColumn({ name: "fk_user" })
    user: User;


    @OneToMany(() => Venta, venta => venta.fk_cliente_vendedor)
    ventas_vendedor: Venta[];

    @OneToMany(() => Venta, venta => venta.fk_cliente_comprador)
    ventas_comprador: Venta[];

    @CreateDateColumn()
    createAt: Date;

    @UpdateDateColumn()
    updateAt: Date;
}