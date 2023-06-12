import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Categoria } from './models/categoria';
import { CreateCategoryDto } from './dto/crear-category.dto';

@Injectable()
export class CategoriaService {
  constructor(
    @InjectModel(Categoria)
    private readonly categoriaModel: typeof Categoria,
  ) {}

  create(crearCategoriaDto: CreateCategoryDto) {
    return this.categoriaModel.create({
      nombre: crearCategoriaDto.nombre,
    });
  }
  async findAll(): Promise<Categoria[]> {
    return this.categoriaModel.findAll();
  }

  async findOne(id: string): Promise<Categoria> {
    return this.categoriaModel.findOne({
      where: {
        id,
      },
    });
  }

  async remove(id: string): Promise<void> {
    const user = await this.findOne(id);
    await user.destroy();
  }
}
