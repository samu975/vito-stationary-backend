import { Module } from '@nestjs/common';
import { OrdenController } from './orden.controller';
import { OrdenService } from './orden.service';
import { Orden } from './models/orden';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([Orden])],
  controllers: [OrdenController],
  providers: [OrdenService],
})
export class OrdenModule {}
