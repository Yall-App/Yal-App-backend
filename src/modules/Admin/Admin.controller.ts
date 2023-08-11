import {
  Controller,
  Get,
  Param,
  Query,
  Post,
  Body,
  Delete,
} from '@nestjs/common';
import { AdminService } from './Admin.service';
import { AdminEntity } from './entities/Admin.entity';
import { CreateAdminDto } from './dtos/CreateAdmin.dto';

@Controller('admin')
export class AdminController {
  constructor(private AdminService: AdminService) {}

  @Get()
  async findAll(@Query('email') email: string): Promise<AdminEntity[]> {
    const admins: AdminEntity[] = email
      ? await this.AdminService.findByEmail(email)
      : await this.AdminService.findAll();
    return admins;
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<AdminEntity> {
    const admin: AdminEntity = await this.AdminService.findById(parseInt(id));
    return admin;
  }

  @Post()
  async create(@Body() CreateAdminDto: CreateAdminDto): Promise<AdminEntity> {
    const newAdmin: AdminEntity = await this.AdminService.create(
      CreateAdminDto,
    );
    return newAdmin;
  }

  @Delete(':id')
  async deleted(@Param('id') id: string): Promise<AdminEntity> {
    const deletedAdmin = await this.AdminService.deleted(parseInt(id));
    return deletedAdmin;
  }
}
