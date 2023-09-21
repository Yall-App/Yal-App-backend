import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Patch,
  Delete,
  Query,
} from '@nestjs/common';
import { UsersService } from './User.service';
import { CreateUserDto } from './dtos/createUser.dto';
import { UpdateUserDto } from './dtos/updateUser.dto';
import { UserRol } from './entities/User.entity';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async findAll(@Query('rol') rol: UserRol) {
    const result = rol
      ? await this.usersService.findByRol(rol)
      : await this.usersService.findAll();
    return result;
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return await this.usersService.findById(id);
  }

  @Post()
  async create(@Body() createFields: CreateUserDto) {
    return await this.usersService.create(createFields);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateFields: UpdateUserDto) {
    return await this.usersService.update(id, updateFields);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.usersService.delete(id);
  }
}
