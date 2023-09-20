import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private readonly booksRepository: Repository<Book>,
    @InjectRepository(Book)
    private readonly usersRepository: Repository<User>,
  ) {}
  async create(createBookDto: CreateBookDto) {
    return await this.booksRepository.save(createBookDto);
  }

  async findAll() {
    return await this.booksRepository.find();
  }

  async findOne(id: number) {
    return await this.booksRepository.findOneBy({ id });
  }

  async update(id: number, updateBookDto: UpdateBookDto) {
    return await this.booksRepository.update(id, updateBookDto);
  }

  async remove(id: number) {
    return await this.booksRepository.softDelete({ id });
  }
}
