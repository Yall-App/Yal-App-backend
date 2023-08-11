import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ArrendatarioService } from './arrendatario.service';
import { ArrendatarioEntity } from './entities/Arrendatario.entity';
import {
  CreateArrendatarioDto,
  UpdateArrendatarioDto,
} from 'src/modules/Arrendatario/dtos/arrendatarios.dto';

@Controller('arrendatario')
export class ArrendatarioController {
  constructor(private arrendatarioService: ArrendatarioService) {}

  @Get()
  async findAll(@Query('email') email: string): Promise<ArrendatarioEntity[]> {
    const arrendatarios: ArrendatarioEntity[] = email
      ? await this.arrendatarioService.findByEmail(email)
      : await this.arrendatarioService.findAllArrendatarios();
    return arrendatarios;
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<ArrendatarioEntity> {
    const arrendatario: ArrendatarioEntity =
      await this.arrendatarioService.getArrendatarioById(id);
    return arrendatario;
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

  @Delete(':id')
  async deleteArrendatario(@Param('id') id: string) {
    await this.arrendatarioService.deleteArrendatario(id);
    return 'Arrendatario eliminado con éxito';
  }
}
