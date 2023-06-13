import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { EnvioService } from './envio.service';
import { CreateEnvioDto } from './dto/create-envio.dto';
import { Envio } from './models/envio';

@Controller('api/envio')
export class EnvioController {
  constructor(private envioService: EnvioService) {}

  @Post()
  crearEnvio(@Body() crearEnvioDto: CreateEnvioDto) {
    return this.envioService.create(crearEnvioDto);
  }

  @Get()
  findAll(): Promise<Envio[]> {
    return this.envioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Envio> {
    return this.envioService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEnvioDto: CreateEnvioDto) {
    return this.envioService.updateShipping(id, updateEnvioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.envioService.remove(id);
  }
}
