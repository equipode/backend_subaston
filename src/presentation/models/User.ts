import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Cliente } from './Cliente';
import { Producto } from './Producto';
import { Role } from './Role';
import { Subasta } from './Subasta';
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

    @Column("int", { default: true })
    estado: boolean;

    @Column()
    fk_rol: number;

    @ManyToOne(() => Role, role => role.users)
    @JoinColumn({ name: "fk_rol" })
    role: Role;

    @OneToMany(() => Ubicacion, ubicacion => ubicacion.fk_user)
    ubicaciones: User[];

    @OneToMany(() => Cliente, cliente => cliente.fk_user)
    clientes: Cliente[];

    @OneToMany(() => Producto, producto => producto.fk_user)
    productos: Producto[];

    @OneToMany(() => Subasta, subasta => subasta.fk_user)
    subastas: Subasta[];

    @CreateDateColumn()
    createAt: Date;

    @UpdateDateColumn()
    updateAt: Date;

}