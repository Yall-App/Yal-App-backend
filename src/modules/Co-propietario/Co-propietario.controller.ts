import { Controller, Get } from '@nestjs/common';
import { CoPropietarioService } from './Co-propietario.service';
import { CoPropietarioEntity } from './entities/Co-propietario.entity';

@Controller('co-propietario')
export class CoPropietarioController {
  constructor(private coPropietarioService: CoPropietarioService) {}

  @Get()
  async findAll(): Promise<CoPropietarioEntity[]> {
    const coPropietarios: CoPropietarioEntity[] =
      await this.coPropietarioService.findAllCoPropietario();
    return coPropietarios;
  }
}
