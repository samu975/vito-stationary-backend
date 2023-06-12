import { Body, Controller, Get, Post } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRolDto } from './dto/create.rol.dto';

@Controller('api/roles')
export class RolesController {
  constructor(private service: RolesService) {}

  @Post()
  insertRol(@Body() crearRolesDto: CreateRolDto) {
    return this.service.create(crearRolesDto);
  }
  @Get('/permisos')
  getRoles() {
    return this.service.getPermisos();
  }
}
