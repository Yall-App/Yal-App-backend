import { Module } from '@nestjs/common';
import { ArrendatarioController } from './arrendatario.controller';
import { ArrendatarioService } from './arrendatario.service';
import { Arrendatario } from './entities/Arrendatario.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Arrendatario])], // Le queremos dar a este módulo alguna funcionalidad externa.
  providers: [ArrendatarioService], // Proveedores, en este caso los servicios.
  controllers: [ArrendatarioController], // Los controladores.
  exports: [], // Si quiero que este módulo exporte alguna fincionalidad que le sea propia.
})
export class ArrendatarioModule {}
