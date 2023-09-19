import {
  IsBoolean,
  IsDate,
  IsOptional,
  IsString,
  IsStrongPassword,
  MinLength,
} from 'class-validator';

export class UpdateBookDto {
  @IsString()
  @MinLength(1)
  @IsOptional()
  name?: string;
  @IsStrongPassword()
  @IsOptional()
  author?: string;
  @IsDate()
  @IsOptional()
  date?: Date;
  @IsBoolean()
  @IsOptional()
  isReseved?: boolean;
}
