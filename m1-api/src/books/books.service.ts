//definit des fonctions pour les requetes de la base de données

import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from '../modules/database/book.entity';
import { CreateBookDto} from './book.dto';
import { Author } from '../modules/database/author.entity';

@Injectable()
export class BooksService {

  constructor(
    @InjectRepository(Book) private booksRepository: Repository<Book>,
    @InjectRepository(Author) private authorsRepository: Repository<Author>,) {}

    async create(createBookDto: CreateBookDto): Promise<Book> {
      const { title, publicationDate, price, authorId } = createBookDto;
  
      // Recherchez l'auteur par son ID
      const author = await this.authorsRepository.findOne({ where: { id: authorId } });
  
      // Associez l'auteur au livre
      const book = this.booksRepository.create({
        title,
        publicationDate,
        price,
        author,
      });
  
      return this.booksRepository.save(book);
    }

    findAll() {
    return this.booksRepository.find({ relations: ['author'] });
  }

    findOne(id: number) {
    return this.booksRepository.findOne({ where: { id }, relations: ['author'] });
  }

    update(id: number, updateBookDto: CreateBookDto) {
    return this.booksRepository.update(id, updateBookDto);
  }

    remove(id: number) {
    return this.booksRepository.delete(id);
  }
}