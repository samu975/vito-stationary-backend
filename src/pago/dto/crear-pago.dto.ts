export class CreatePaymentDto {
  user_id: number;
  verification_token: string;
  payment_method: string;
  cedula: number;
  total: number;
  order_id: number;
  billing_id: number;
  shipping_id: number;
}
