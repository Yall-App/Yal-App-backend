import { IsString } from 'class-validator';

export class UpdateCoPropietarioDto {
  @IsString()
  name: string;

  @IsString()
  apartment: string;
}
