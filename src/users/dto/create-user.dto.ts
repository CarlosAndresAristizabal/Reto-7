import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;
  @IsString()
  @IsOptional()
  name?: string;
  @IsNotEmpty()
  password: string;
}
