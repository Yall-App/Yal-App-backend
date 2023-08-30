import { IsString } from 'class-validator';

export class CreateCoPropietarioDto {
  @IsString()
  name: string;

  @IsString()
  apartment: string;
}