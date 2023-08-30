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
import { CoPropietarioService } from './Co-propietario.service';
import { CreateCoPropietarioDto } from './dtos/CreateCoPropietario.dto';
import { UpdateCoPropietarioDto } from './dtos/UpdateCoPropietario.dto';

@Controller('co-propietario')
export class CoPropietarioController {
  constructor(private CoPropietarioService: CoPropietarioService) {}

  @Get()
  async findAll(@Query('name') name: string) {
    const result = name
      ? await this.CoPropietarioService.findByname(name)
      : await this.CoPropietarioService.findAll();
    return result;
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return await this.CoPropietarioService.findById(id);
  }

  @Post()
  async createCoPropietario(
    @Body() CreateCoPropietarioFields: CreateCoPropietarioDto,
  ) {
    return await this.CoPropietarioService.create(CreateCoPropietarioFields);
  }

  @Patch(':id')
  async updateCoPropietario(
    @Param('id') id: string,
    @Body() updateCoPropietarioFields: UpdateCoPropietarioDto,
  ) {
    return await this.CoPropietarioService.update(id, updateCoPropietarioFields);
  }

  @Delete(':id')
  async deleteCoPropietario(@Param('id') id: string) {
    return await this.CoPropietarioService.delete(id);
  }
}
