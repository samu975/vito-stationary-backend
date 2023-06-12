import { Module } from '@nestjs/common';
import { CategoriaController } from './categoria.controller';
import { CategoriaService } from './categoria.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Categoria } from './models/categoria';

@Module({
  imports: [SequelizeModule.forFeature([Categoria])],
  controllers: [CategoriaController],
  providers: [CategoriaService],
})
export class CategoriaModule {}
