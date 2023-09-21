import { Injectable } from '@nestjs/common';
import { UsersService } from '../User.service';

@Injectable()
export class ArrendatarioService {
  constructor(private usersRepository: UsersService) {}
}
