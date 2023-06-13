import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Roles } from './models/roles';
import { CreateRolDto } from './dto/create.rol.dto';
import { Permisos } from './permisos/permisos';
import { promises } from 'dns';

@Injectable()
export class RolesService {
  constructor(
    @InjectModel(Roles)
    private readonly rolesModel: typeof Roles,
  ) {}

  create(crearRolDto: CreateRolDto): Promise<Roles> {
    return this.rolesModel.create({
      nombre_permiso: crearRolDto.nombre,
      llave_permiso: crearRolDto.llave,
      permisos: crearRolDto.permisos,
    });
  }

  async findAll(): Promise<Roles[]> {
    return await this.rolesModel.findAll();
  }

  getPermisos(): any {
    return Permisos;
  }
}
