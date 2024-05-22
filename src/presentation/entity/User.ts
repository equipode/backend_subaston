import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Role } from './Role';

@Entity('user')
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    usuario: string;

    @Column()
    contrasenia: string;

    @Column()
    foto_perfil: string;

    @Column()
    nit: string;

    @Column()
    estado: boolean;

    @ManyToOne(() => Role, role => role.users)
    fk_rol: Role;

    @CreateDateColumn()
    createAt: Date;

    @UpdateDateColumn()
    updateAt: Date;

}