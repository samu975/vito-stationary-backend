export class CreatePaymentDto {
  codigoPago: number;
  fechaPago: Date;
  horaPago: Date;
  ordenPagada: number;
  medioPago: string;
  nombrePagador: string;
  emailPagador: string;
  idPagador: number;
}
