import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Admin } from './entities/Admin.entity';
import { CreateAdminDto } from './dtos/CreateAdmin.dto';
import { UpdateAdminDto } from './dtos/UpdateAdmin.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin)
    private adminRepository: Repository<Admin>,
  ) {}

  async findAll() {
    return await this.adminRepository.find();
  }

  async findById(id: string) {
    const adminFound = await this.adminRepository.find({
      where: {
        id,
      },
    });

    if (!adminFound) {
      return new HttpException('Admin not found', HttpStatus.NOT_FOUND);
    }

    return adminFound;
  }

  async findByEmail(email: string) {
    const adminFound = await this.adminRepository.find({
      where: {
        email,
      },
    });

    if (!adminFound) {
      return new HttpException('Admin not found', HttpStatus.NOT_FOUND);
    }

    return adminFound;
  }

  async create(CreateAdminDto: CreateAdminDto) {
    const arrFound = await this.adminRepository.find({
      where: {
        email: CreateAdminDto.email,
      },
    });

    if (arrFound.length) {
      return new HttpException('Email already exists', HttpStatus.CONFLICT);
    }

    const newArrendatario = this.adminRepository.create(CreateAdminDto);
    return await this.adminRepository.save(newArrendatario);
  }

  async update(id: string, updateAdminFields: UpdateAdminDto) {
    const result = await this.adminRepository.update({ id }, updateAdminFields);

    if (result.affected === 0) {
      return new HttpException('Admin not found', HttpStatus.NOT_FOUND);
    }

    return result;
  }

  async deleted(id: string) {
    const result = await this.adminRepository.delete({ id });

    if (result.affected === 0) {
      return new HttpException('Arrendatario not found', HttpStatus.NOT_FOUND);
    }

    return result;
  }
}
