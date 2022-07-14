export interface AuthResponse {
    usuario?: Usuario;
    token:   string;
}

export interface Usuario {
    _id:    string;
    name:   string;
    correo: string;
    rol:    string;
    estado: boolean;
}
