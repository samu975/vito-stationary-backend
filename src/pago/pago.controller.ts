import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { PagoService } from './pago.service';

@Controller('api/pago')
export class PagoController {
  constructor(private pagoService: PagoService) {}

  @Post()
  crearPago(@Body() crearPagoDto: any) {
    return this.pagoService.create(crearPagoDto);
  }

  @Get()
  findAll(): Promise<any[]> {
    return this.pagoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<any> {
    return this.pagoService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.pagoService.delete(id);
  }
}
