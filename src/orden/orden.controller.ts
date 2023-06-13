import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { OrdenService } from './orden.service';
import { CreateOrderDto } from './dto/crear-orden.dto';
import { Orden } from './models/orden';

@Controller('api/orden')
export class OrdenController {
  constructor(private ordenService: OrdenService) {}

  @Post()
  crearOrden(@Body() crearOrdenDto: CreateOrderDto) {
    return this.ordenService.create(crearOrdenDto);
  }

  @Get()
  findAll(): Promise<Orden[]> {
    return this.ordenService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Orden> {
    return this.ordenService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderDto: CreateOrderDto) {
    return this.ordenService.uptadeOrder(id, updateOrderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.ordenService.remove(id);
  }
}
