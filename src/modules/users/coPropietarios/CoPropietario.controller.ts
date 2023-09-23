import { Controller, Get } from '@nestjs/common';
import { CoPropietarioService } from './CoPropietario.service';

@Controller('users/copropietario')
export class CoPropietarioController {
  constructor(private coPropietarioService: CoPropietarioService) {}

  @Get()
  async findAll() {
    return await this.coPropietarioService.findAll();
  }
}
