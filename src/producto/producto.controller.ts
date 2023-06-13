import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Patch,
  Put,
} from '@nestjs/common';
import { ProductoService } from './producto.service';
import { CreateProductDto } from './dto/crear-producto.dto';
import { Producto } from './models/producto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('api/producto')
export class ProductoController {
  constructor(private productoService: ProductoService) {}

  @Post()
  crearProducto(@Body() crearProductoDto: CreateProductDto) {
    return this.productoService.create(crearProductoDto);
  }

  @Get()
  findAll(): Promise<Producto[]> {
    return this.productoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Producto> {
    return this.productoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productoService.updateProduct(id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.productoService.remove(id);
  }
}
