import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
export declare class BooksController {
  private readonly booksService;
  constructor(booksService: BooksService);
  create(
    createBookDto: CreateBookDto,
  ): Promise<CreateBookDto & import('./entities/book.entity').Book>;
  findAll(): Promise<import('./entities/book.entity').Book[]>;
  findOne(id: string): Promise<import('./entities/book.entity').Book>;
  update(
    id: string,
    updateBookDto: UpdateBookDto,
  ): Promise<import('typeorm').UpdateResult>;
  remove(id: string): Promise<import('typeorm').UpdateResult>;
}
