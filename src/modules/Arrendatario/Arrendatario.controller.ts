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
      ? await this.arrendatarioService.getArrByEmail(email)
      : await this.arrendatarioService.getArr();
    return result;
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return await this.arrendatarioService.getArrById(id);
  }

  @Post()
  async createArrendatario(@Body() arrendatario: CreateArrendatarioDto) {
    return await this.arrendatarioService.createArr(arrendatario);
  }

  @Patch(':id')
  async updateArrendatario(
    @Param('id') id: string,
    @Body() updateArrendatarioFields: UpdateArrendatarioDto,
  ) {
    return await this.arrendatarioService.updateArr(
      id,
      updateArrendatarioFields,
    );
  }

  @Delete(':id')
  async deleteArrendatario(@Param('id') id: string) {
    return await this.arrendatarioService.deleteArr(id);
  }
}
