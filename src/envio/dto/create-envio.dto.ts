export class CreateEnvioDto {
  user_id: number;
  order_id: number;
  payment_id: number;
  shipping_method: string;
  shipping_cost: number;
  adress: string;
  adess_details?: string;
  neighborhood: string;
  state: string;
  city: string;
  departament: string;
  name: string;
  cedula: string;
  telephone: string;
}
