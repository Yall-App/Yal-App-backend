import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ArrendatarioService } from './arrendatario.service';
import { ArrendatarioEntity } from './entities/Arrendatario.entity';
import {
  CreateArrendatarioDto,
  UpdateArrendatarioDto,
} from 'src/dtos/arrendatarios.dto';

@Controller('arrendatario')
export class ArrendatarioController {
  constructor(private arrendatarioService: ArrendatarioService) {}

  @Get()
  async findAll(): Promise<ArrendatarioEntity[]> {
    const arrendatarios: ArrendatarioEntity[] =
      await this.arrendatarioService.findAllArrendatarios();
    return arrendatarios;
  }
  @Post()
  async createArrendatario(@Body() arrendatario: CreateArrendatarioDto) {
    await this.arrendatarioService.createArrendatario(arrendatario);
    return 'Arrendatario creado con éxito';
  }
  @Patch(':id')
  updateArrendatario(
    @Param('id') id: string,
    @Body() updateArrendatarioFields: UpdateArrendatarioDto,
  ) {
    this.arrendatarioService.updateArrendatario(id, updateArrendatarioFields);
    return 'Arrendatario actualizado con éxito';
  }
}
