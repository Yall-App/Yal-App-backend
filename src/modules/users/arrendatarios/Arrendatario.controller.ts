import { Controller } from '@nestjs/common';
import { ArrendatarioService } from './Arrendatario.service';

@Controller('users/arrendatarios')
export class ArrendatarioController {
  constructor(private arrendatarioService: ArrendatarioService) {}
}
