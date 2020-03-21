import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BookDTO } from './dto/Book.dto';

@Injectable()
export class BookService {
  constructor(
    @InjectModel('Book') private readonly bookSchema: Model<BookDTO>,
  ) {}

  async all(): Promise<BookDTO[]> {
    return this.bookSchema.find();
  }

  async store(bookDTO: BookDTO): Promise<BookDTO> {
    const saved = await this.bookSchema.create(bookDTO);
    await saved.save();

    return saved;
  }
}
