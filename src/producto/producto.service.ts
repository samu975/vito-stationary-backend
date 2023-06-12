import { Injectable } from '@nestjs/common';
import { Producto } from './models/producto';
import { InjectModel } from '@nestjs/sequelize';
import { CreateProductDto } from './dto/crear-producto.dto';

@Injectable()
export class ProductoService {
  constructor(
    @InjectModel(Producto)
    private readonly productoModel: typeof Producto,
  ) {}

  create(crearProductoDto: CreateProductDto) {
    return this.productoModel.create({
      codigo: crearProductoDto.codigo,
      nombre: crearProductoDto.nombre,
      descripcion: crearProductoDto.descripcion,
      precio: crearProductoDto.precio,
      descuento: crearProductoDto.descuento,
      categoria: crearProductoDto.categoria,
      imagen: crearProductoDto.imagen,
      cantidad: crearProductoDto.cantidad,
    });
  }
  async findAll(): Promise<Producto[]> {
    return this.productoModel.findAll();
  }

  async findOne(id: string): Promise<Producto> {
    return this.productoModel.findOne({
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
