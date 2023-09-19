import {
  IsBoolean,
  IsDate,
  IsString,
  IsStrongPassword,
  MinLength,
} from 'class-validator';

export class CreateBookDto {
  @IsString()
  @MinLength(1)
  name: string;
  @IsStrongPassword()
  author: string;
  @IsDate()
  date: Date;
  @IsBoolean()
  isReseved: boolean;
}
