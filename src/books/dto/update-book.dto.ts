import {
  IsBoolean,
  IsOptional,
  IsString,
  IsStrongPassword,
} from 'class-validator';

export class UpdateBookDto {
  @IsString()
  @IsOptional()
  name?: string;
  @IsStrongPassword()
  @IsOptional()
  author?: string;
  @IsString()
  @IsOptional()
  date?: string;
  @IsBoolean()
  @IsOptional()
  isReseved?: boolean;
}
