//definit des fonctions pour les requetes de la base de données

import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from '../modules/database/book.entity';
import { CreateBookDto} from './book.dto';

@Injectable()
export class BooksService {

  constructor(
    @InjectRepository(Book) 
    private booksRepository: Repository<Book>,
  ) {}

    create(createBookDto: CreateBookDto) {
    const book = this.booksRepository.create(createBookDto);
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