import { Producto } from 'src/producto/models/producto';

export class CreateOrderDto {
  codigoOrden: number;
  fechaOrden: Date;
  horaOrden: Date;
  productosOrdenados: Array<Producto>;
  subTotalOrden: number;
  ivaOrden: number;
  envioOrden: number;
  totalOrden: number;
  nombreCliente: string;
  emailCliente: string;
  direccionCliente: string;
  telefonoCliente: number;
  ciudadCliente: string;
  departamentoCliente: string;
  idCliente: number;
}
