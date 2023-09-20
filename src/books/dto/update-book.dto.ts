import {
  IsBoolean,
  IsOptional,
  IsString,
  IsStrongPassword,
} from 'class-validator';
import { User } from 'src/users/entities/user.entity';
import { OneToMany } from 'typeorm';

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
  @OneToMany(() => User, (user) => user.book)
  users: User[];
}
