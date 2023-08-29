import { IsString } from 'class-validator';

export class CreateAdminDto {
  @IsString()
  email: string;

  @IsString()
  password: string;
}

export class UpdateAdminDto {
  @IsString()
  email: string;

  @IsString()
  password: string;
}
