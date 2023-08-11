import { Module } from '@nestjs/common';
import { ArrendatarioModule } from './modules/Arrendatario/arrendatario.module';
import { CoPropietarioModule } from './modules/Co-propietario/Co-propietario.module';
import { AdminModule } from './modules/Admin/Admin.module';

@Module({
  imports: [ArrendatarioModule, CoPropietarioModule, AdminModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
