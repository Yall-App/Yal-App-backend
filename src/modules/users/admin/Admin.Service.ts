import { Injectable } from '@nestjs/common';
import { UsersService } from '../User.service';

@Injectable()
export class AdminService {
  constructor(private usersService: UsersService) {}

  async findAll() {
    const rol = 'ADMIN';
    return await this.usersService.findByRol(rol);
  }
}
