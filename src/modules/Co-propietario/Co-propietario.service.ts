import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CoPropietario } from './entities/Co-propietario.entity';
import { CreateCoPropietarioDto } from './dtos/CreateCoPropietario.dto';
import { UpdateCoPropietarioDto } from './dtos/UpdateCoPropietario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CoPropietarioService {
  constructor(
    @InjectRepository(CoPropietario)
    private CoPropietarioRepository: Repository<CoPropietario>,
  ) {}

  async findAll() {
    return await this.CoPropietarioRepository.find();
  }

  async create(createCoPropietarioDto: CreateCoPropietarioDto) {
    const CoPropietarioFound = await this.CoPropietarioRepository.find({
      where: {
        apartment: createCoPropietarioDto.apartment,
      },
    });

    if (CoPropietarioFound.length) {
      return new HttpException('apartment already exists', HttpStatus.CONFLICT);
    }

    const newCoPropietario = this.CoPropietarioRepository.create(createCoPropietarioDto);
    return await this.CoPropietarioRepository.save(newCoPropietario);
  }

  async findById(id: string) {
    const CoPropietarioFound = await this.CoPropietarioRepository.find({
      where: {
        id,
      },
    });

    if (!CoPropietarioFound) {
      return new HttpException('CoPropietario not found', HttpStatus.NOT_FOUND);
    }

    return CoPropietarioFound;
  }

  async findByname(name: string) {
    const CoPropietarioFound = await this.CoPropietarioRepository.find({
      where: {
        name,
      },
    });

    if (!CoPropietarioFound) {
      return new HttpException('CoPropietario not found', HttpStatus.NOT_FOUND);
    }

    return CoPropietarioFound;
  }

  async update(id: string, updateCoPropietarioFields: UpdateCoPropietarioDto) {
    const result = await this.CoPropietarioRepository.update(
      { id },
      updateCoPropietarioFields,
    );

    if (result.affected === 0) {
      return new HttpException('CoPropietario not found', HttpStatus.NOT_FOUND);
    }

    return result;
  }

  async delete(id: string) {
    const result = await this.CoPropietarioRepository.delete({ id });

    if (result.affected === 0) {
      return new HttpException('CoPropietario not found', HttpStatus.NOT_FOUND);
    }

    return result;
  }
}