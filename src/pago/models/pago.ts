import { Column, Table, Model } from 'sequelize-typescript';

@Table
export class Pago extends Model {
  @Column
  carrito_id: number;

  @Column
  verification_token: string;

  @Column
  payment_method: string;

  @Column
  cedula: number;

  @Column
  total: number;

  @Column
  order_id: number;

  @Column
  billing_id: number;

  @Column
  shipping_id: number;
}
