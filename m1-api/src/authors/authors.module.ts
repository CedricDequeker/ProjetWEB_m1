// src/authors/authors.module.ts
import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorsController } from './authors.controller';
import { AuthorsService } from './authors.service';
import { Author } from '../modules/database/author.entity';
import { Book } from '../modules/database/book.entity'; // Assurez-vous que le chemin est correct
import { BooksService } from '../books/books.service'; // Assurez-vous que le chemin est correct
import { BooksModule } from '../books/book.module';

@Module({
    imports: [TypeOrmModule.forFeature([Author, Book]),forwardRef(() => BooksModule)], 
    controllers: [AuthorsController],
    providers: [AuthorsService],
    exports: [AuthorsService],
})
export class AuthorsModule {}
