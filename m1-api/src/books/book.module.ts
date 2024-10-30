//regroupe le service et le controller

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from '../modules/database/book.entity';
import { BooksController } from './book.controller';
import { BooksService } from './books.service';
import { AuthorsModule } from 'src/authors/authors.module';
import { ReviewsModule } from 'src/reviews/reviews.module';

@Module({
    imports: [TypeOrmModule.forFeature([Book]), AuthorsModule, ReviewsModule],
    controllers: [BooksController],
    providers: [BooksService],
})

export class BookModule {}