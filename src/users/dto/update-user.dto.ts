import {
  IsEmail,
  IsOptional,
  IsString,
  IsStrongPassword,
  MinLength,
} from 'class-validator';

export class UpdateUserDto {
  @IsEmail()
  @IsOptional()
  email?: string;
  @IsString()
  @MinLength(1)
  @IsOptional()
  name?: string;
  @IsStrongPassword()
  @IsOptional()
  password?: string;
}
