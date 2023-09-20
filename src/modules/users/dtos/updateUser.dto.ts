import {
  IsString,
  IsNotEmpty,
  MinLength,
  IsNumber,
  IsEmail,
  IsOptional,
} from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  name: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
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

  @IsNotEmpty()
  @IsString()
  password: string;
}
