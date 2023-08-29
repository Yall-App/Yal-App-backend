import {
  Controller,
  Get,
  Param,
  Query,
  Post,
  Body,
  Delete,
  Patch,
} from '@nestjs/common';
import { ApartmentService } from './Apartment.service';
import { CreateApartmentDto } from './dtos/CreateApartment.dto';
import { UpdateApartmentDto } from './dtos/UpdateApartment.dto';

@Controller('apartment')
export class ApartmentController {
  constructor(private apartmentService: ApartmentService) {}

  @Get()
  async findAll() {
    return await this.apartmentService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return await this.apartmentService.findById(id);
  }

  @Post()
  async createArrendatario(@Body() createApartmentFields: CreateApartmentDto) {
    return await this.apartmentService.create(createApartmentFields);
  }

  @Patch(':id')
  async updateArrendatario(
    @Param('id') id: string,
    @Body() updateAapartmentFields: UpdateApartmentDto,
  ) {
    return await this.apartmentService.update(id, updateAapartmentFields);
  }

  @Delete(':id')
  async deleteArrendatario(@Param('id') id: string) {
    return await this.apartmentService.delete(id);
  }
}
