import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Chat } from "./Chats";

@Entity('mensajes_chats')
export class MensajesChat extends BaseEntity {

    @PrimaryGeneratedColumn()
    pk_mens: number;

    @Column("char", {length: 150 })
    mensaje : string;

    @Column("time")
    hora: string;

    @Column("date")
    fecha: string;
    
    @ManyToOne(()=> Chat, cha => cha.chats)
    fk_chat: Chat;

    @CreateDateColumn()
    createAt: Date;

    @UpdateDateColumn()
    updateAt:Date;
}