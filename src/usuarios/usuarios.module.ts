import { Module } from '@nestjs/common';
import { UsuariosController } from './usuarios.controller';
import { UsuariosService } from './usuarios.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Usuario } from './models/usuario';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    SequelizeModule.forFeature([Usuario]),
    JwtModule.register({
      global: true,
      secret: '123456secret123',
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [UsuariosController],
  providers: [UsuariosService],
})
export class UsuariosModule {}
