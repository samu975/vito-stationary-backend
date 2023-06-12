import { Injectable } from '@nestjs/common';
import { UsuariosService } from 'src/usuarios/usuarios.service';

@Injectable()
export class AuthService {
  constructor(private usuarioservice: UsuariosService) {}

  async validateUser(username: string, contrasena: string): Promise<any> {
    const user = await this.usuarioservice.queryLogin(username, contrasena);
    return user;
  }
}
