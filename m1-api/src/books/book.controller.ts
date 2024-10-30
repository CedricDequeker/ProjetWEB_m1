//implemante les routes de l'api

import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto} from './book.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  create(@Body() createBookDto: CreateBookDto) {
    return this.booksService.create(createBookDto);
  }

  @Get()
  findAll() {
    return this.booksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.booksService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookDto: CreateBookDto) {
    return this.booksService.update(+id, updateBookDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.booksService.remove(+id);
  }

  @Get(':id/reviews')
  async getReviewsForBook(@Param('id') id: string) {
    const bookId = parseInt(id, 10); // Convertit l'ID en nombre
    if (isNaN(bookId)) {
      throw new BadRequestException('Invalid book ID');
    }
    return this.booksService.getReviewsForBook(bookId);
  }

}