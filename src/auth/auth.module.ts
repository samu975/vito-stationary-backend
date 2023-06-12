import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Usuario } from 'src/usuarios/models/usuario';
import { UsuariosService } from 'src/usuarios/usuarios.service';

@Module({
  imports: [SequelizeModule.forFeature([Usuario])],
  controllers: [AuthController],
  providers: [UsuariosService],
})
export class AuthModule {}
