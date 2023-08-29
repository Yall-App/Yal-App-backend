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
import { AdminService } from './Admin.service';
import { CreateAdminDto } from './dtos/CreateAdmin.dto';
import { UpdateAdminDto } from './dtos/UpdateAdmin.dto';

@Controller('admin')
export class AdminController {
  constructor(private AdminService: AdminService) {}

  @Get()
  async findAll(@Query('email') email: string) {
    const admins = email
      ? await this.AdminService.findByEmail(email)
      : await this.AdminService.findAll();
    return admins;
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return await this.AdminService.findById(id);
  }

  @Post()
  async create(@Body() CreateAdminFields: CreateAdminDto) {
    return await this.AdminService.create(CreateAdminFields);
  }

  @Patch(':id')
  async updateAdmin(
    @Param('id') id: string,
    @Body() updateAdminFields: UpdateAdminDto,
  ) {
    return await this.AdminService.update(id, updateAdminFields);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.AdminService.delete(id);
  }
}
