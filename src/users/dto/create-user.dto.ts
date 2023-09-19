import {
  IsDate,
  IsEmail,
  IsString,
  IsStrongPassword,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;
  @IsString()
  @MinLength(1)
  name: string;
  @IsStrongPassword()
  password: string;
  @IsDate()
  date: Date;
}
