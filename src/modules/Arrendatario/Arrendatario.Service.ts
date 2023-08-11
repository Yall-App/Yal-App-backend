import { Injectable } from '@nestjs/common';
import { ArrendatarioEntity } from './entities/Arrendatario.entity';
import {
  CreateArrendatarioDto,
  UpdateArrendatarioDto,
} from 'src/modules/Arrendatario/dtos/arrendatarios.dto';
import { v4 } from 'uuid';

@Injectable()
export class ArrendatarioService {
  list: ArrendatarioEntity[];
  constructor() {
    this.list = [
      {
        id: '1',
        name: 'Harry Potter',
        apartment: '3',
        phoneNumber: 351351351,
        document: 41414141,
        email: 'asd@gmail',
      },
      {
        id: '2',
        name: 'Franquito',
        apartment: '5',
        phoneNumber: 351351353,
        document: 41414142,
        email: 'fermin@gmail',
      },
      {
        id: '3',
        name: 'Fermín',
        apartment: '1',
        phoneNumber: 351351352,
        document: 41414143,
        email: 'fermin@gmail',
      },
    ];
  }

  async findAllArrendatarios(): Promise<ArrendatarioEntity[]> {
    return this.list;
  }

  async createArrendatario(
    createArrendatarioDto: CreateArrendatarioDto,
  ): Promise<ArrendatarioEntity> {
    const newArrendatario: ArrendatarioEntity = {
      id: v4(),
      name: createArrendatarioDto.name,
      apartment: createArrendatarioDto.apartment,
      document: createArrendatarioDto.document,
      phoneNumber: createArrendatarioDto.phoneNumber,
      email: createArrendatarioDto.email,
    };
    this.list.push(newArrendatario);
    return newArrendatario;
  }

  async getArrendatarioById(id: string) {
    return this.list.find((arrendatario) => arrendatario.id === id);
  }

  async findByEmail(email: string): Promise<ArrendatarioEntity[]> {
    return this.list.filter((e: ArrendatarioEntity) => e.email === email);
  }

  async updateArrendatario(
    id: string,
    updateArrendatarioFields: UpdateArrendatarioDto,
  ) {
    const arrendatario: ArrendatarioEntity = await this.getArrendatarioById(id);
    const newArrendatario: ArrendatarioEntity = Object.assign(
      arrendatario,
      updateArrendatarioFields,
    );
    this.list = this.list.map((e) => (e.id === id ? newArrendatario : e));
  }

  async deleteArrendatario(id: string) {
    this.list = this.list.filter((arrendatario) => arrendatario.id != id);
  }
}
