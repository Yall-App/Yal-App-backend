import { IsString } from 'class-validator';

export class CreateAdminDto {
  @IsString()
  apartment: String;

  @IsString()
  email: String;

  @IsString()
  password: String;
}
