import { Injectable } from '@nestjs/common';
import { ArrendatarioEntity } from './entities/Arrendatario.entity';
import {
  CreateArrendatarioDto,
  UpdateArrendatarioDto,
} from 'src/dtos/arrendatarios.dto';
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
      },
      {
        id: '2',
        name: 'Franquito',
        apartment: '5',
      },
      {
        id: '3',
        name: 'Fermín',
        apartment: '1',
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
    };
    this.list.push(newArrendatario);
    return newArrendatario;
  }

  getArrendatarioById(id: string) {
    return this.list.find((arrendatario) => arrendatario.id === id);
  }
  updateArrendatario(
    id: string,
    updateArrendatarioFields: UpdateArrendatarioDto,
  ): ArrendatarioEntity {
    const arrendatario = this.getArrendatarioById(id);
    const newArrendatario = Object.assign(
      arrendatario,
      updateArrendatarioFields,
    );
    this.list = this.list.map((arrendatario) =>
      arrendatario.id === id ? newArrendatario : arrendatario,
    );
    return newArrendatario;
  }
  // deleteArrendatario() {}
}
