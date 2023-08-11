import { IsString, IsNotEmpty, MinLength, IsOptional } from 'class-validator';

export class CreateArrendatarioDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  name: string;
  @IsString()
  @IsNotEmpty()
  apartment: string;
}

export class UpdateArrendatarioDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @IsOptional()
  name?: string;
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  apartment?: string;
}
