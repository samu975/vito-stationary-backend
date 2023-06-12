import { Categoria } from 'src/categoria/models/categoria';

export class CreateProductDto {
  codigo: number;
  nombre: string;
  descripcion: string;
  precio: number;
  descuento: number;
  categoria: Categoria;
  imagen: string;
  cantidad: number;
}
