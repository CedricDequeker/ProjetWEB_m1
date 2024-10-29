//regroupe le service et le controller

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from '../modules/database/book.entity';
import { BooksController } from './book.controller';
import { BooksService } from './books.service';

@Module({
    imports: [TypeOrmModule.forFeature([Book])],
    controllers: [BooksController],
    providers: [BooksService],
})

export class BookModule {}