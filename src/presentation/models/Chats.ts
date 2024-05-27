import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Venta } from "./Venta";
import { MensajesChat } from "./Mensajes_chat";

@Entity('chats')
export class Chat extends BaseEntity {

    @PrimaryGeneratedColumn()
    pk_chat: number;

    @Column("int" )
    estado: number;

    @ManyToOne(()=> Venta, venta => venta.ventas)
    fk_venta: Venta;

    @OneToMany(() => MensajesChat, mensajeschat => mensajeschat.fk_chat)
    chats: MensajesChat[];

    @CreateDateColumn()
    createAt: Date;

    @UpdateDateColumn()
    updateAt:Date;
}