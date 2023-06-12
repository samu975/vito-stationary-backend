import { Module } from '@nestjs/common';
import { ProductoController } from './producto.controller';
import { ProductoService } from './producto.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Producto } from './models/producto';

@Module({
  imports: [SequelizeModule.forFeature([Producto])],
  controllers: [ProductoController],
  providers: [ProductoService],
})
export class ProductoModule {}
