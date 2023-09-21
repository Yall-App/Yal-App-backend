import { Injectable } from '@nestjs/common';
import { UsersService } from '../User.service';
import { UserRol } from '../entities/User.entity';

@Injectable()
export class ArrendatarioService {
  constructor(private usersRepository: UsersService) {}

  async findAll() {
    const rol = 'ARRENDATARIO';
    return await this.usersRepository.findByRol(rol);
  }
}
