import { Controller, Get } from '@nestjs/common';
import { UsersService } from '../User.service';

@Controller('users/arrendatarios')
export class AdminController {
  constructor(private usersService: UsersService) {}

  @Get()
  async findAll() {
    return await this.usersService.findAll();
  }
}
