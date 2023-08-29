import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Apartment } from './entities/Apartment.entity';
import { ApartmentService } from './Apartment.service';
import { ApartmentController } from './Apartment.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Apartment])],
  providers: [ApartmentService],
  controllers: [ApartmentController],
  exports: [],
})
export class AdminModule {}
