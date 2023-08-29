import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Apartment } from './entities/Apartment.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ApartmentService {
  constructor(
    @InjectRepository(Apartment)
    private adminRepository: Repository<Apartment>,
  ) {}
}
