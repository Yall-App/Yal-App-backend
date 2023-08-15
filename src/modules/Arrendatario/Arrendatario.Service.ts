import { Injectable } from '@nestjs/common';
import { Arrendatario } from './entities/Arrendatario.entity';
import {
  CreateArrendatarioDto,
  UpdateArrendatarioDto,
} from 'src/modules/Arrendatario/dtos/arrendatarios.dto';
import { v4 } from 'uuid';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ArrendatarioService {
  list: Arrendatario[];
  constructor(
    @InjectRepository(Arrendatario)
    private arrRepository: Repository<Arrendatario>,
  ) {}

  async findAllArrendatarios(): Promise<Arrendatario[]> {
    return this.list;
  }

  async createArrendatario(
    createArrendatarioDto: CreateArrendatarioDto,
  ): Promise<Arrendatario> {
    const newArrendatario: Arrendatario = {
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

  async findByEmail(email: string): Promise<Arrendatario[]> {
    return this.list.filter((e: Arrendatario) => e.email === email);
  }

  async updateArrendatario(
    id: string,
    updateArrendatarioFields: UpdateArrendatarioDto,
  ) {
    const arrendatario: Arrendatario = await this.getArrendatarioById(id);
    const newArrendatario: Arrendatario = Object.assign(
      arrendatario,
      updateArrendatarioFields,
    );
    this.list = this.list.map((e) => (e.id === id ? newArrendatario : e));
  }

  async deleteArrendatario(id: string) {
    this.list = this.list.filter((arrendatario) => arrendatario.id != id);
  }
}
