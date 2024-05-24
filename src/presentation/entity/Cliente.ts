import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Ubicacion } from "./Ubicaciones";
import { User } from "./User";

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

    @CreateDateColumn()
    createAt: Date;

    @UpdateDateColumn()
    updateAt: Date;
}