import { IsString } from 'class-validator';

export class UpdateAdminDto {
  @IsString()
  email: string;

  @IsString()
  password: string;
}
