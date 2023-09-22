import { Controller, Get } from '@nestjs/common';
import { ArrendatarioService } from './Arrendatario.service';

@Controller('users/arrendatarios')
export class ArrendatarioController {
  constructor(private arrendatarioService: ArrendatarioService) {}

  @Get()
  async findAll() {
    return await this.arrendatarioService.findAll();
  }
}
