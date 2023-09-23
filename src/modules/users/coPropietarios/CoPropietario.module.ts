import { Module } from '@nestjs/common';
import { UsersModule } from '../User.module';
import { CoPropietarioService } from './CoPropietario.service';

@Module({
  imports: [UsersModule],
  providers: [CoPropietarioService],
  controllers: [CoPropietarioService],
  exports: [],
})
export class CoPropietarioModule {}
