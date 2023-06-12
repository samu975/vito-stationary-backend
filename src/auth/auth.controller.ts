import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthDTO } from './dto/auth.dto';
import { UsuariosService } from 'src/usuarios/usuarios.service';

@Controller('auth')
export class AuthController {
  constructor(private service: UsuariosService) {}

  @Post('login')
  login(@Body() authDto: AuthDTO) {
    return this.service.queryLogin(authDto.email, authDto.contrasena);
  }
}
