import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/User.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dtos/createUser.dto';
import { UpdateUserDto } from './dtos/updateUser.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async findAll() {
    return await this.usersRepository.find();
  }

  async findById(id: string) {
    return await this.usersRepository.find({
      where: {
        id,
      },
    });
  }

  async create(createFields: CreateUserDto) {
    const newUser = this.usersRepository.create(createFields);
    return await this.usersRepository.save(newUser);
  }

  async update(id: string, updateFields: UpdateUserDto) {
    const result = await this.usersRepository.update({ id }, updateFields);

    if (result.affected === 0) {
      return new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    return result;
  }

  async delete(id: string) {
    const result = await this.usersRepository.delete({ id });

    if (result.affected === 0) {
      return new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    return result;
  }
}
