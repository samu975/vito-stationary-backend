import { Column, Table, Model } from 'sequelize-typescript';
import { Categoria } from 'src/categoria/models/categoria';
import { JoinTable, ManyToMany } from 'typeorm';

@Table
export class Producto extends Model {
  @Column
  codigo: number;

  @Column
  nombre: string;

  @Column
  descripcion: string;

  @Column
  precio: number;

  @Column
  descuento: number;

  @Column
  imagen: string;

  @Column
  cantidad: number;

  @ManyToMany(() => Categoria, (category) => category.products)
  @JoinTable()
  categories: Categoria[];
}
