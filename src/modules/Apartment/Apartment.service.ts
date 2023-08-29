import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Apartment } from './entities/Apartment.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateApartmentDto } from './dtos/CreateApartment.dto';
import { UpdateApartmentDto } from './dtos/UpdateApartment.dto';

@Injectable()
export class ApartmentService {
  constructor(
    @InjectRepository(Apartment)
    private apartmentRepository: Repository<Apartment>,
  ) {}

  async findAll() {
    return await this.apartmentRepository.find();
  }

  async findById(id: string) {
    const apartmentFound = await this.apartmentRepository.find({
      where: {
        id,
      },
    });

    if (!apartmentFound) {
      return new HttpException('Apartment not found', HttpStatus.NOT_FOUND);
    }

    return apartmentFound;
  }

  async create(createApartmentDto: CreateApartmentDto) {
    const newArrendatario = this.apartmentRepository.create(createApartmentDto);
    return await this.apartmentRepository.save(newArrendatario);
  }

  async update(id: string, updateApartmentFields: UpdateApartmentDto) {
    const result = await this.apartmentRepository.update(
      { id },
      updateApartmentFields,
    );

    if (result.affected === 0) {
      return new HttpException('Apartment not found', HttpStatus.NOT_FOUND);
    }

    return result;
  }

  async delete(id: string) {
    const result = await this.apartmentRepository.delete({ id });

    if (result.affected === 0) {
      return new HttpException('Arrendatario not found', HttpStatus.NOT_FOUND);
    }

    return result;
  }
}
