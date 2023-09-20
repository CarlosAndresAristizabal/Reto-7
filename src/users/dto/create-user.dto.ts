import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;
  @IsString()
  name: string;
  @IsNotEmpty()
  password: string;
  @IsString()
  @IsOptional()
  book?: string;
}
