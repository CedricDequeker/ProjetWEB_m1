import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from '../modules/database/book.entity';
import { BooksController } from './book.controller';
import { BooksService } from './books.service';
import { AuthorsModule } from 'src/authors/authors.module';
import { ReviewsModule } from 'src/reviews/reviews.module';
import { Author } from '../modules/database/author.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Book,Author]), 
        forwardRef(() => AuthorsModule), // Utilisez forwardRef ici
        ReviewsModule
    ],
    controllers: [BooksController],
    providers: [BooksService],
    exports: [BooksService],
})
export class BooksModule {}
