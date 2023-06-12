import { Column, Table, Model } from 'sequelize-typescript';

@Table
export class Payment extends Model {
  @Column
  codigoPago: number;

  @Column
  fechaOrden: Date;

  @Column
  horaOrden: Date;

  @Column
  ordenPagada: number;

  @Column
  nombrePagador: string;

  @Column
  emailPagador: string;

  @Column
  idPagador: string;

  @Column({ defaultValue: false })
  isPayd: boolean;
}
