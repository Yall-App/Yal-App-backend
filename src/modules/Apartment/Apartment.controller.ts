import {
  Controller,
  Get,
  Param,
  Query,
  Post,
  Body,
  Delete,
  Patch,
} from '@nestjs/common';
import { ApartmentService } from './Apartment.service';

@Controller('apartment')
export class ApartmentController {
  constructor(private apartmentService: ApartmentService) {}
}
