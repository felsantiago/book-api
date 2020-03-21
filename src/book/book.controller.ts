import { Controller, Get, Post, Body } from '@nestjs/common';
import { BookService } from './book.service';
import { BookDTO } from './dto/Book.dto';
import {
  ApiTags,
  ApiCreatedResponse,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';

@ApiTags('BookController')
@Controller('api/v1/book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  @ApiOperation({ summary: 'Retorna Todos os Livros' })
  @ApiResponse({
    description: 'Retorna uma lista de Livros',
    status: 200,
    type: BookDTO,
    isArray: true,
  })
  async getAllBooks(): Promise<BookDTO[]> {
    return this.bookService.all();
  }

  @Post()
  @ApiOperation({ summary: 'Cadastra Livros no banco de dados' })
  @ApiCreatedResponse({
    description: 'O registro foi criado com sucesso.',
    type: BookDTO,
  })
  async storeBook(@Body() bookDTO: BookDTO): Promise<BookDTO> {
    return this.bookService.store(bookDTO);
  }
}
