import { Injectable } from '@nestjs/common';
import { Envio } from './models/envio';
import { InjectModel } from '@nestjs/sequelize';
import { CreateEnvioDto } from './dto/create-envio.dto';

@Injectable()
export class EnvioService {
  constructor(
    @InjectModel(Envio)
    private readonly envioModel: typeof Envio,
  ) {}

  create(createEnvioDto: CreateEnvioDto) {
    return this.envioModel.create({
      user_id: createEnvioDto.user_id,
      order_id: createEnvioDto.order_id,
      payment_id: createEnvioDto.payment_id,
      shipping_method: createEnvioDto.shipping_method,
      shipping_cost: createEnvioDto.shipping_cost,
      adress: createEnvioDto.adress,
      adess_details: createEnvioDto.adess_details,
      neighborhood: createEnvioDto.neighborhood,
      state: createEnvioDto.state,
      city: createEnvioDto.city,
      name: createEnvioDto.name,
      cedula: createEnvioDto.cedula,
      telephone: createEnvioDto.telephone,
      departament: createEnvioDto.departament,
    });
  }

  async findAll(): Promise<Envio[]> {
    return this.envioModel.findAll();
  }

  async findOne(id: string): Promise<Envio> {
    return this.envioModel.findOne({
      where: {
        id,
      },
    });
  }

  async updateShipping(id: string, updateEnvioDto: CreateEnvioDto) {
    const [rowsUpdated] = await this.envioModel.update(updateEnvioDto, {
      where: { id },
    });

    if (rowsUpdated === 0) {
      throw new Error('No se pudo actualizar el envio');
    }

    return this.envioModel.findByPk(id);
  }

  async remove(id: string): Promise<void> {
    const envio = await this.envioModel.findOne({
      where: {
        id,
      },
    });
    await envio.destroy();
  }
}
