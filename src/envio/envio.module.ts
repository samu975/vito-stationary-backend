import { Module } from '@nestjs/common';
import { EnvioController } from './envio.controller';
import { EnvioService } from './envio.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Envio } from './models/envio';

@Module({
  imports: [SequelizeModule.forFeature([Envio])],
  controllers: [EnvioController],
  providers: [EnvioService],
})
export class EnvioModule {}
