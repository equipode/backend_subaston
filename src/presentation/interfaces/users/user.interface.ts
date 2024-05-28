export interface Users {
    id: number;
    usuario: string;
    contrasenia: string;
    foto_perfil: string;
    nit: string;
    estado: boolean;
    fk_rol: number;
    createAt: Date;
    updateAt: Date;
}