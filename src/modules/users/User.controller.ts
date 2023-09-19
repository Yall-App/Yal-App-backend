import { Controller } from '@nestjs/common';
import { UsersService } from './User.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
}
