import { Module } from '@nestjs/common';
import { AdminService } from './Admin.service';
import { AdminController } from './Admin.controller';
import { Admin } from './entities/Admin.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Admin])],
  providers: [AdminService],
  controllers: [AdminController],
  exports: [],
})
export class AdminModule {}
