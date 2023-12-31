import { Injectable } from '@nestjs/common';
import { UsersService } from '../User.service';

@Injectable()
export class ArrendatarioService {
  constructor(private usersService: UsersService) {}

  async findAll() {
    const rol = 'ARRENDATARIO';
    return await this.usersService.findByRol(rol);
  }
}
