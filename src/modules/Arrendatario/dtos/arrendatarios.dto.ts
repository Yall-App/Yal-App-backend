import {
  IsString,
  IsNotEmpty,
  MinLength,
  IsOptional,
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

  @IsNumber()
  @IsNotEmpty()
  phoneNumber: number;
}

export class UpdateArrendatarioDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @IsOptional()
  name: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  apartment: string;

  @IsNotEmpty()
  @IsNumber()
  @IsOptional()
  document: number;

  @IsOptional()
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsOptional()
  @IsNumber()
  @IsNotEmpty()
  phoneNumber: number;
}
