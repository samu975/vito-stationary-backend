import { Body, Controller, Get, Param, Post, Delete } from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { CreateCategoryDto } from './dto/crear-category.dto';
import { Categoria } from './models/categoria';

@Controller('api/categoria')
export class CategoriaController {
  constructor(private categoriaService: CategoriaService) {}

  @Post()
  crearCategoria(@Body() crearCategoriaDto: CreateCategoryDto) {
    return this.categoriaService.create(crearCategoriaDto);
  }

  @Get()
  findAll(): Promise<Categoria[]> {
    return this.categoriaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Categoria> {
    return this.categoriaService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.categoriaService.remove(id);
  }
}
