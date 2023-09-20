import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';
import { Repository } from 'typeorm';
export declare class BooksService {
  private readonly booksRepository;
  constructor(booksRepository: Repository<Book>);
  create(createBookDto: CreateBookDto): Promise<CreateBookDto & Book>;
  findAll(): Promise<Book[]>;
  findOne(id: number): Promise<Book>;
  update(
    id: number,
    updateBookDto: UpdateBookDto,
  ): Promise<import('typeorm').UpdateResult>;
  remove(id: number): Promise<import('typeorm').UpdateResult>;
}
