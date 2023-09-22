import { Module } from '@nestjs/common';
import { UsersModule } from '../User.module';
import { AdminService } from './Admin.Service';
import { AdminController } from './Admin.controller';

@Module({
  imports: [UsersModule],
  providers: [AdminService],
  controllers: [AdminController],
  exports: [],
})
export class AdminModule {}
