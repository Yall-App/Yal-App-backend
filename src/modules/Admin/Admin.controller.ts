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
import { Admin } from './entities/Admin.entity';
import { CreateAdminDto, UpdateAdminDto } from './dtos/CreateAdmin.dto';

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
  async create(@Body() CreateAdminDto: CreateAdminDto) {
    return await this.AdminService.create(CreateAdminDto);
  }

  @Patch(':id')
  async updateAdmin(
    @Param('id') id: string,
    @Body() updateAdminFields: UpdateAdminDto,
  ) {
    return await this.AdminService.update(id, updateAdminFields);
  }

  @Delete(':id')
  async deleted(@Param('id') id: string) {
    return await this.AdminService.deleted(id);
  }
}
