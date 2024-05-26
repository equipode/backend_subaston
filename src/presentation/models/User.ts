import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Cliente } from './Cliente';
import { Role } from './Role';
import { Ubicacion } from './Ubicaciones';

@Entity('usuarios')
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("char", { length: 100 })
    usuario: string;

    @Column("char", { length: 100 })
    contrasenia: string;

    @Column("char", { length: 250 })
    foto_perfil: string;

    @Column("char", { length: 50 })
    nit: string;

    @Column("int")
    estado: boolean;

    @ManyToOne(() => Role, role => role.users)
    fk_rol: Role;

    @OneToMany(() => Ubicacion, ubicacion => ubicacion.fk_user)
    ubicaciones: User[];

    @OneToMany(() => Cliente, cliente => cliente.fk_user)
    clientes: Cliente[];

    @CreateDateColumn()
    createAt: Date;

    @UpdateDateColumn()
    updateAt: Date;

}