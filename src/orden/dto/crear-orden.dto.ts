export class CreateOrderDto {
  user_id: number;
  costo: number;
  impuestos: number;
  total: number;
  pagado: boolean;
  carrito_id: number;
}
