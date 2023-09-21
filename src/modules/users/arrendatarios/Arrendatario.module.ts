import { Module } from '@nestjs/common';
import { UsersModule } from '../User.module';
import { ArrendatarioService } from './Arrendatario.service';
import { ArrendatarioController } from './Arrendatario.controller';

@Module({
  imports: [UsersModule],
  providers: [ArrendatarioService],
  controllers: [ArrendatarioController],
  exports: [],
})
export class ArrendatarioModule {}
