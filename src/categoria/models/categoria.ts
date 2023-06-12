import { Column, Table, Model, HasMany, DataType } from 'sequelize-typescript';
import { Producto } from 'src/producto/models/producto';
import { JoinTable, ManyToMany } from 'typeorm';

@Table
export class Categoria extends Model {
  @Column
  nombre: string;

  @Column({ type: DataType.BOOLEAN, defaultValue: true })
  isAvaible: boolean;

  @ManyToMany(() => Producto, (producto) => producto.categories)
  @JoinTable()
  products: Producto[];
}
