import { Module } from '@nestjs/common';
import { ArrendatarioModule } from './modules/Arrendatario/Arrendatario.module';
import { CoPropietarioModule } from './modules/Co-propietario/Co-propietario.module';

@Module({
  imports: [ArrendatarioModule, CoPropietarioModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
