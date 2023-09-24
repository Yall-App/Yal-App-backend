import { Controller, Get } from '@nestjs/common';
import { SuperAdminService } from './SuperAdmin.service';

@Controller('users/superadmin')
export class SuperAdminController {
  constructor(private superAdminService: SuperAdminService) {}

  @Get()
  async findAll() {
    return await this.superAdminService.findAll();
  }
}
