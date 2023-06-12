import { Column, Table, Model } from 'sequelize-typescript';
import { Producto } from '../../producto/models/producto';

@Table
export class Order extends Model {
  @Column
  codigoOrden: number;

  @Column
  fechaOrden: Date;

  @Column
  horaOrden: Date;

  @Column
  productosOrdenados: Array<Producto>;

  @Column
  subTotalOrden: number;

  @Column
  ivaOrden: number;

  @Column
  envioOrden: number;

  @Column
  totalOrden: number;

  @Column
  nombreCliente: string;

  @Column
  emailCliente: string;

  @Column
  direccionCliente: string;

  @Column
  telefonoCliente: number;

  @Column
  ciudadCliente: string;

  @Column
  departamentoCliente: string;

  @Column
  idCliente: string;

  @Column({ defaultValue: false })
  isPayd: boolean;
}
