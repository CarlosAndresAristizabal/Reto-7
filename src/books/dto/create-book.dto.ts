import { IsBoolean, IsString } from 'class-validator';

export class CreateBookDto {
  @IsString()
  name: string;
  @IsString()
  author: string;
  @IsString()
  date: string;
  @IsBoolean()
  isReseved: boolean;
}
