import { Injectable } from '@nestjs/common';
import { UsersService } from '../User.service';

@Injectable()
export class AdminService {
  constructor(private UsersService: UsersService) {}
}
