import { Injectable } from '@nestjs/common';
import { UsersService } from '../User.service';

@Injectable()
export class SuperAdminService {
  constructor(private usersService: UsersService) {}

  async findAll() {
    const rol = 'CO_PROPIETARIO';
    return await this.usersService.findByRol(rol);
  }
}
