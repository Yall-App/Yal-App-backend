import { Module } from '@nestjs/common';
import { ArrendatarioController } from './Arrendatario.controller';
import { ArrendatarioService } from './Arrendatario.Service';

@Module({
  imports: [], // Le queremos dar a este módulo alguna funcionalidad externa.
  providers: [ArrendatarioService], // Proveedores, en este caso los servicios.
  controllers: [ArrendatarioController], // Los controladores.
  exports: [], // Si quiero que este módulo exporte alguna fincionalidad que le sea propia.
})
export class ArrendatarioModule {}
