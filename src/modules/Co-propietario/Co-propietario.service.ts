import { Injectable } from '@nestjs/common';
import { CoPropietarioEntity } from './entities/Co-propietario.entity';

@Injectable()
export class CoPropietarioService {
  stock: CoPropietarioEntity[];
  constructor() {
    this.stock = [
      {
        id: 1,
        name: 'Harry Potter',
        apartment: 3,
      },
      {
        id: 2,
        name: 'Santi',
        apartment: 5,
      },
      {
        id: 3,
        name: 'GordoFermín',
        apartment: 1,
      },
    ];
  }

  async findAllCoPropietario(): Promise<CoPropietarioEntity[]> {
    return this.stock;
  }
}
