import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Pago } from './models/pago';
import { CreatePaymentDto } from './dto/crear-pago.dto';

@Injectable()
export class PagoService {
  constructor(
    @InjectModel(Pago)
    private readonly pagoModel: typeof Pago,
  ) {}

  create(createPaymentDto: CreatePaymentDto) {
    return this.pagoModel.create({
      user_id: createPaymentDto.user_id,
      verification_token: createPaymentDto.verification_token,
      payment_method: createPaymentDto.payment_method,
      cedula: createPaymentDto.cedula,
      total: createPaymentDto.total,
      order_id: createPaymentDto.order_id,
      billing_id: createPaymentDto.billing_id,
      shipping_id: createPaymentDto.shipping_id,
    });
  }

  async findAll(): Promise<Pago[]> {
    return this.pagoModel.findAll();
  }

  async findOne(id: string): Promise<Pago> {
    return this.pagoModel.findOne({
      where: {
        id,
      },
    });
  }

  async delete(id: string): Promise<void> {
    const order = await this.pagoModel.findOne({
      where: {
        id,
      },
    });
    await order.destroy();
  }
}
