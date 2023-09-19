import { Module } from '@nestjs/common';
import { CoPropietarioController } from './Co-propietario.controller';
import { CoPropietarioService } from './Co-propietario.service';
import { CoPropietario } from './entities/Co-propietario.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CoPropietario])], // Le queremos dar a este módulo alguna funcionalidad externa.
  providers: [CoPropietarioService], // Proveedores, en este caso los servicios.
  controllers: [CoPropietarioController], // Los controladores.
  exports: [], // Si quiero que este módulo exporte alguna fincionalidad que le sea propia.
})
export class CoPropietarioModule {}
