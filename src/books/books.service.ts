import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private readonly booksRepository: Repository<Book>,
  ) {}
  async create(createBookDto: CreateBookDto) {
    return this.booksRepository.save(createBookDto);
  }

  async findAll() {
    return this.booksRepository.find();
  }

  async findOne(id: number) {
    return this.booksRepository.findOneBy({ id });
  }

  async update(id: number, updateBookDto: UpdateBookDto) {
    return this.booksRepository.update(id, updateBookDto);
  }

  async remove(id: number) {
    return this.booksRepository.softDelete({ id });
  }
}
