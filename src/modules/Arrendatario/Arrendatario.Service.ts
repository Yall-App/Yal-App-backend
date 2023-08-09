import { Injectable } from '@nestjs/common';
import { ArrendatarioEntity } from './entities/Arrendatario.entity';

@Injectable()
export class ArrendatarioService {
  stock: ArrendatarioEntity[];
  constructor() {
    this.stock = [
      {
        id: 1,
        name: 'Harry Potter',
        apartment: 3,
      },
      {
        id: 2,
        name: 'Franquito',
        apartment: 5,
      },
      {
        id: 3,
        name: 'Fermín',
        apartment: 1,
      },
    ];
  }

  async findAllArrendatario(): Promise<ArrendatarioEntity[]> {
    return this.stock;
  }
}
