import { Controller, Get } from '@nestjs/common';
import { ArrendatarioService } from './Arrendatario.Service';
import { ArrendatarioEntity } from './entities/Arrendatario.entity';

@Controller('arrendatario')
export class ArrendatarioController {
  constructor(private arrendatarioService: ArrendatarioService) {}

  @Get()
  async findAll(): Promise<ArrendatarioEntity[]> {
    const arrendatarios: ArrendatarioEntity[] =
      await this.arrendatarioService.findAllArrendatario();
    return arrendatarios;
  }
}
