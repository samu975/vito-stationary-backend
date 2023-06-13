import { Module } from '@nestjs/common';
import { PagoController } from './pago.controller';
import { PagoService } from './pago.service';
import { Pago } from './models/pago';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([Pago])],
  controllers: [PagoController],
  providers: [PagoService],
})
export class PagoModule {}
