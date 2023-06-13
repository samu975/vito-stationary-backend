import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Orden } from './models/orden';
import { CreateOrderDto } from './dto/crear-orden.dto';
import { UpdateOrderDto } from './dto/update-orden.dto';

@Injectable()
export class OrdenService {
  constructor(
    @InjectModel(Orden)
    private readonly ordenModel: typeof Orden,
  ) {}

  create(createOrderDto: CreateOrderDto) {
    return this.ordenModel.create({
      user_id: createOrderDto.user_id,
      total: createOrderDto.costo,
      estado: createOrderDto.impuestos,
      usuario: createOrderDto.total,
      producto: createOrderDto.pagado,
      carrito_id: createOrderDto.carrito_id,
    });
  }

  async findAll(): Promise<Orden[]> {
    return this.ordenModel.findAll();
  }

  async findOne(id: string): Promise<Orden> {
    return this.ordenModel.findOne({
      where: {
        id,
      },
    });
  }

  async uptadeOrder(id: string, updateOrderDto: UpdateOrderDto) {
    const [rowsUpdated] = await this.ordenModel.update(updateOrderDto, {
      where: { id },
    });

    if (rowsUpdated === 0) {
      throw new Error('No se pudo actualizar la orden');
    }

    return this.ordenModel.findByPk(id);
  }

  async remove(id: string): Promise<void> {
    const order = await this.ordenModel.findOne({
      where: {
        id,
      },
    });
    await order.destroy();
  }
}
