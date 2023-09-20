import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateUserDto {
  @IsEmail()
  @IsOptional()
  email?: string;
  @IsString()
  @IsOptional()
  name?: string;
  @IsNotEmpty()
  password: string;
  @IsString()
  @IsOptional()
  book?: string;
}
