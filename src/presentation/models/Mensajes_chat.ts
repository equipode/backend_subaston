import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Chat } from "./Chats";

@Entity('mensajes_chats')
export class MensajesChat extends BaseEntity {

    @PrimaryGeneratedColumn()
    pk_mens: number;

    @Column("char", { length: 150 })
    mensaje: string;

    @Column("time")
    hora: string;

    @Column("date")
    fecha: string;

    @Column()
    fk_chat: number;

    @ManyToOne(() => Chat, cha => cha.chats)
    @JoinColumn({ name: "fk_chat" })
    chat: Chat;

    @CreateDateColumn()
    createAt: Date;

    @UpdateDateColumn()
    updateAt: Date;
}