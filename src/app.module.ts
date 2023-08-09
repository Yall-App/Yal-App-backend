import { Module } from '@nestjs/common';
import { ArrendatarioModule } from './modules/Arrendatario/Arrendatario.module';

@Module({
  imports: [ArrendatarioModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
