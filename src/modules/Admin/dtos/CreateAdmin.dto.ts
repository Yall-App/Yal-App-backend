import { IsString } from 'class-validator';

export class CreateAdminDto {
  @IsString()
  email: String;

  @IsString()
  password: String;
}
