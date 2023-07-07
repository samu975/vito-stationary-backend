import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Put,
} from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/crear-usuario.dto';
import { Usuario } from './models/usuario';

@Controller('api/usuarios')
export class UsuariosController {
  constructor(private service: UsuariosService) {}

  @Post()
  crearUsuario(@Body() crearUsuarioDto: CreateUsuarioDto) {
    return this.service.create(crearUsuarioDto);
  }

  @Get()
  findAll(): Promise<Usuario[]> {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Usuario> {
    return this.service.findOne(id);
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() updateUsuarioDto: CreateUsuarioDto) {
    return this.service.updateUsuario(id, updateUsuarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.service.remove(id);
  }
}
