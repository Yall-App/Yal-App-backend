import { Module } from '@nestjs/common';
import { AdminService } from './Admin.service';
import { AdminController } from './Admin.controller';

@Module({
  imports: [],
  providers: [AdminService],
  controllers: [AdminController],
  exports: [],
})
export class AdminModule {}
