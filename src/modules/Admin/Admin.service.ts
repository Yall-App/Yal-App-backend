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
        apartment: '1A',
        email: 'pepito@email.com',
        password: 'ad2Fdscaavbr',
      },
      {
        id: 2,
        apartment: '3A',
        email: 'juan@email.com',
        password: '235452ld1',
      },
      {
        id: 3,
        apartment: '2b',
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

  async findByApartment(apartment: string): Promise<AdminEntity> {
    return this.stock.find(
      (admin: AdminEntity) => admin.apartment === apartment,
    );
  }

  async findByEmail(email: string): Promise<AdminEntity> {
    return this.stock.find((admin: AdminEntity) => admin.email === email);
  }

  async create(CreateAdminDto: CreateAdminDto): Promise<AdminEntity> {
    const { apartment, email, password } = CreateAdminDto;

    const newAdmin: AdminEntity = {
      id: this.stock.length + 1,
      apartment,
      email,
      password,
    };

    return newAdmin;
  }

  async deleted(id: number): Promise<AdminEntity> {
    const admin: AdminEntity = this.stock.find(
      (admin: AdminEntity) => admin.id === id,
    );

    const index: number = this.stock.findIndex(
      (admin: AdminEntity) => admin.id === id,
    );

    this.stock = this.stock.splice(index, 1);

    return admin;
  }
}
