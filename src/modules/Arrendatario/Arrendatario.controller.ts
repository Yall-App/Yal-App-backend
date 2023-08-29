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
import { CreateArrendatarioDto } from 'src/modules/Arrendatario/dtos/CreateArrendatario.dto';
import { UpdateArrendatarioDto } from 'src/modules/Arrendatario/dtos/UpdateArrendatario.dto';

@Controller('arrendatario')
export class ArrendatarioController {
  constructor(private arrendatarioService: ArrendatarioService) {}

  @Get()
  async findAll(@Query('email') email: string) {
    const result = email
      ? await this.arrendatarioService.findByEmail(email)
      : await this.arrendatarioService.findAll();
    return result;
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return await this.arrendatarioService.findById(id);
  }

  @Post()
  async createArrendatario(
    @Body() CreateArrendatarioFields: CreateArrendatarioDto,
  ) {
    return await this.arrendatarioService.create(CreateArrendatarioFields);
  }

  @Patch(':id')
  async updateArrendatario(
    @Param('id') id: string,
    @Body() updateArrendatarioFields: UpdateArrendatarioDto,
  ) {
    return await this.arrendatarioService.update(id, updateArrendatarioFields);
  }

  @Delete(':id')
  async deleteArrendatario(@Param('id') id: string) {
    return await this.arrendatarioService.delete(id);
  }
}
