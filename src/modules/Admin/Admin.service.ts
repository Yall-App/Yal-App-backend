import { Injectable } from '@nestjs/common';
import { AdminEntity } from './entities/Admin.entity';
import { CreateAdminDto } from './dtos/CreateAdmin.dto';

@Injectable()
export class AdminService {
  stock: AdminEntity[];
  constructor() {
    this.stock = [
      {
        id: 1,
        email: 'pepito@email.com',
        password: 'ad2Fdscaavbr',
      },
      {
        id: 2,
        email: 'juan@email.com',
        password: '235452ld1',
      },
      {
        id: 3,
        email: 'carloso@email.com',
        password: 'carlos1234',
      },
    ];
  }

  async findAll(): Promise<AdminEntity[]> {
    return this.stock;
  }

  async findById(id: number): Promise<AdminEntity> {
    return this.stock.find((admin: AdminEntity) => admin.id === id);
  }

  async findByEmail(email: string): Promise<AdminEntity[]> {
    return [].concat(
      this.stock.find((admin: AdminEntity) => admin.email === email),
    );
  }

  async create(CreateAdminDto: CreateAdminDto): Promise<AdminEntity> {
    const { email, password } = CreateAdminDto;

    const newAdmin: AdminEntity = {
      id: this.stock.length + 1,
      email,
      password,
    };

    this.stock.push(newAdmin);

    return newAdmin;
  }

  async deleted(id: number): Promise<AdminEntity> {
    const admin: AdminEntity = this.stock.find(
      (admin: AdminEntity) => admin.id === id,
    );

    const index: number = this.stock.findIndex(
      (admin: AdminEntity) => admin.id === id,
    );

    this.stock.splice(index, 1);

    return admin;
  }
}
