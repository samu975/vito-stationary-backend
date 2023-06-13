import { Column, Table, Model } from 'sequelize-typescript';

@Table
export class Orden extends Model {
  @Column
  user_id: number;

  @Column
  costo: number;

  @Column
  impuesto: number;

  @Column
  total: number;

  @Column
  carrito_id: number;

  @Column({ defaultValue: false })
  pagado: boolean;
}
