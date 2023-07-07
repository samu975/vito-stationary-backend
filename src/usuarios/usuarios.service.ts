import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Usuario } from './models/usuario';
import { CreateUsuarioDto } from './dto/crear-usuario.dto';
import { JwtService } from '@nestjs/jwt';

var md5 = require('md5');
@Injectable()
export class UsuariosService {
  constructor(
    @InjectModel(Usuario)
    private readonly usuarioModel: typeof Usuario,
    private jwtService: JwtService,
  ) {}

  create(crearUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    return this.usuarioModel.create({
      nombre: crearUsuarioDto.nombre,
      apellido: crearUsuarioDto.apellido,
      email: crearUsuarioDto.email,
      contrasena: md5(crearUsuarioDto.contrasena),
      rol: crearUsuarioDto.rol,
      telefono: crearUsuarioDto.telefono,
    });
  }
  async findAll(): Promise<Usuario[]> {
    return await this.usuarioModel.findAll();
  }

  async findOne(id: string): Promise<Usuario> {
    return await this.usuarioModel.findOne({
      where: {
        id,
      },
    });
  }

  async queryLogin(email: string, contrasena: string): Promise<any> {
    const user = await this.usuarioModel.findOne({
      where: {
        email,
        contrasena: md5(contrasena),
      },
    });
    if (user === undefined) {
      throw new UnauthorizedException();
    }
    const payload = {
      sub: user.id,
      correo: user.email,
      rol: user.rol,
      nombre: user.nombre,
      telefono: user.telefono,
    };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async updateUsuario(id: string, updateUsuarioDto: CreateUsuarioDto) {
    const [rowsUpdated] = await this.usuarioModel.update(updateUsuarioDto, {
      where: { id },
    });

    if (rowsUpdated === 0) {
      throw new Error('No se pudo actualizar el usuario');
    }

    return this.usuarioModel.findByPk(id);
  }

  async remove(id: string): Promise<void> {
    const user = await this.findOne(id);
    await user.destroy();
  }
}
