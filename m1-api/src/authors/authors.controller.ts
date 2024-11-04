// src/authors/authors.controller.ts
import { Controller, Post,Put, Body, Get, Param ,Inject} from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { CreateAuthorDto, UpdateAuthorDto } from './authors.dto';
import { BooksService } from '../books/books.service'; // Importez le service des livres
import { Book } from '../modules/database/book.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Author } from '../modules/database/author.entity'; // Importez l'entité Author

@Controller('authors')
export class AuthorsController {
    constructor(@InjectRepository(Author) private readonly authorRepository: Repository<Author>,
    private readonly authorsService: AuthorsService,
    private readonly booksService: BooksService,) {}

    @Post()
    create(@Body() createAuthorDto: CreateAuthorDto,) {
        return this.authorsService.create(createAuthorDto);
    }

    @Get()
    findAll() {
        return this.authorsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
    return this.authorsService.findOne(+id);
    }

    @Get(':id/books') // Cette route pour obtenir les livres d'un auteur
    async findBooksByAuthor(@Param('id') id: string) {
        return this.booksService.findByAuthorId(+id); // Implémentez cette méthode dans le BooksService
    }

    @Put(':id')
    async updateAuthor(@Param('id') id: string, @Body() updateAuthorDto: UpdateAuthorDto) {
        return this.authorsService.update(+id, updateAuthorDto);
    }

    @Get()
    async findAllAuthors() {
    return this.authorRepository.find({ relations: ['books'] });
    }
}
