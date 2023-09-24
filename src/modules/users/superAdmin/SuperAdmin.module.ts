import { Module } from '@nestjs/common';
import { UsersModule } from '../User.module';
import { SuperAdminService } from './SuperAdmin.service';
import { SuperAdminController } from './SuperAdmin.controller';

@Module({
  imports: [UsersModule],
  providers: [SuperAdminService],
  controllers: [SuperAdminController],
  exports: [],
})
export class SuperAdminModule {}
