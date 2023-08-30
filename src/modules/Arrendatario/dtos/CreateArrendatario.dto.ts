import {
  IsString,
  IsNotEmpty,
  MinLength,
  IsNumber,
  IsEmail,
} from 'class-validator';

export class CreateArrendatarioDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  name: string;

  @IsString()
  @IsNotEmpty()
  apartment: string;

  @IsNotEmpty()
  @IsNumber()
  document: number;

  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  // @IsNumber()
  // @IsNotEmpty()
  // phoneNumber: number;
}
