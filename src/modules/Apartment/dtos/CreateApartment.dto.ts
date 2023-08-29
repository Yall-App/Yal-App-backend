import { IsString, IsNotEmpty } from 'class-validator';

export class CreateApartmentDto {
  @IsString()
  @IsNotEmpty()
  condominio: string;

  @IsNotEmpty()
  @IsString()
  tower: string;

  @IsNotEmpty()
  @IsString()
  floor: string;

  @IsNotEmpty()
  @IsString()
  number: string;
}
