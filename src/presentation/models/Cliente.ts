import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
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

    @ManyToOne(() => Ubicacion, ubicacion => ubicacion.clientes)
    fk_user: Ubicacion;

    @ManyToOne(() => User, user => user.clientes)
    fk_ubicacion: User;

    
    @OneToMany(() => Venta, venta => venta.fk_cliente_vendedor)
    ventas_vendedor: Venta[];
    
    @OneToMany(() => Venta, venta => venta.fk_cliente_comprador)
    ventas_comprador: Venta[];
    
    @CreateDateColumn()
    createAt: Date;

    @UpdateDateColumn()
    updateAt: Date;
}