import { col } from 'sequelize';
import { Column, Table, Model } from 'sequelize-typescript';

@Table
export class Envio extends Model {
  @Column
  user_id: number;
  @Column
  order_id: number;
  @Column
  payment_id: number;
  @Column
  shipping_method: string;
  @Column
  shipping_cost: number;
  @Column
  adress: string;
  @Column
  name: string;
  @Column
  cedula: string;
  @Column
  telephone: string;
  @Column
  neighborhood: string;
  @Column
  state: string;
  @Column
  city: string;
  @Column
  adress_details?: string;
  @Column
  departament: string;
}
