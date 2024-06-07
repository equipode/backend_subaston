import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { MensajesChat } from "./Mensajes_chat";
import { Venta } from "./Venta";

@Entity('chats')
export class Chat extends BaseEntity {

    @PrimaryGeneratedColumn()
    pk_chat: number;

    @Column("int")
    estado: number;

    @Column()
    fk_venta: number;

    @ManyToOne(() => Venta, venta => venta.ventas)
    @JoinColumn({ name: "fk_venta" })
    venta: Venta;

    @OneToMany(() => MensajesChat, mensajeschat => mensajeschat.fk_chat)
    chats: MensajesChat[];

    @CreateDateColumn()
    createAt: Date;

    @UpdateDateColumn()
    updateAt: Date;
}