import { Injectable } from '@nestjs/common';
import { UsersService } from '../User.service';

@Injectable()
export class CoPropietarioService {
  constructor(private usersService: UsersService) {}

  async findAll() {
    const rol = 'CO_PROPIETARIO';
    return await this.usersService.findByRol(rol);
  }
}
