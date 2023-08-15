import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Arrendatario } from './entities/Arrendatario.entity';
import {
  CreateArrendatarioDto,
  UpdateArrendatarioDto,
} from 'src/modules/Arrendatario/dtos/arrendatarios.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ArrendatarioService {
  list: Arrendatario[];
  constructor(
    @InjectRepository(Arrendatario)
    private arrRepository: Repository<Arrendatario>,
  ) {}

  async getArr(): Promise<Arrendatario[]> {
    return await this.arrRepository.find();
  }

  async createArr(createArrendatarioDto: CreateArrendatarioDto) {
    const arrFound = await this.arrRepository.find({
      where: {
        document: createArrendatarioDto.document,
      },
    });

    if (arrFound.length) {
      return new HttpException('Document already exists', HttpStatus.CONFLICT);
    }

    const newArrendatario = this.arrRepository.create(createArrendatarioDto);
    return await this.arrRepository.save(newArrendatario);
  }

  async getArrById(id: string) {
    const arrFound = await this.arrRepository.find({
      where: {
        id,
      },
    });

    if (!arrFound) {
      return new HttpException('Arrendatario not found', HttpStatus.NOT_FOUND);
    }

    return arrFound;
  }

  async getArrByEmail(email: string) {
    const arrFound = await this.arrRepository.find({
      where: {
        email,
      },
    });

    if (!arrFound) {
      return new HttpException('Arrendatario not found', HttpStatus.NOT_FOUND);
    }

    return arrFound;
  }

  async updateArr(id: string, updateArrendatarioFields: UpdateArrendatarioDto) {
    const result = await this.arrRepository.update(
      { id },
      updateArrendatarioFields,
    );

    if (result.affected === 0) {
      return new HttpException('Arrendatario not found', HttpStatus.NOT_FOUND);
    }

    return result;
  }

  async deleteArr(id: string) {
    const result = await this.arrRepository.delete({ id });

    if (result.affected === 0) {
      return new HttpException('Arrendatario not found', HttpStatus.NOT_FOUND);
    }

    return result;
  }
}
