import { Controller, Get } from '@nestjs/common';
import { AdminService } from './Admin.service';
import { AdminEntity } from './entities/Admin.entity';

@Controller('admin')
export class AdminController {
  constructor(private AdminService: AdminService) {}

  @Get()
  async findAll(): Promise<AdminEntity[]> {
    const admins: AdminEntity[] = await this.AdminService.findAll();
    return admins;
  }
}
