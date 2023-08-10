import { Body, Controller, Get, Post } from '@nestjs/common';
import { ArrendatarioService } from './arrendatario.service';
import { ArrendatarioEntity } from './entities/Arrendatario.entity';
import { CreateArrendatarioDto } from 'src/dtos/arrendatarios.dto';

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
  }
}
