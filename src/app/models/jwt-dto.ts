/**
 * Clase para manejar tokens de autenticacion
 */
export class JwtDTO {
    token: string;
    type: string;
    usuario: string;
    authorities: string[];

}
