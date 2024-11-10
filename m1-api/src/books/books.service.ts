//definit des fonctions pour les requetes de la base de données

import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from '../modules/database/book.entity';
import { CreateBookDto, UpdateBookDto} from './book.dto';
import { Author } from '../modules/database/author.entity';
import { ReviewsService } from '../reviews/reviews.service';

@Injectable()
export class BooksService {

  constructor(
    @InjectRepository(Book) private booksRepository: Repository<Book>,
    @InjectRepository(Author) private authorsRepository: Repository<Author>,
    private reviewsService: ReviewsService,
    ) {}

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

  findOne(id: number) {
    return this.booksRepository.findOne({ where: { id }, relations: ['author'] });
  }

  async update(id: number, updateBookDto: UpdateBookDto): Promise<Book> {
    const { authorId, ...otherUpdates } = updateBookDto;
  
    // Récupérer le livre existant
    const book = await this.booksRepository.findOne({ where: { id }, relations: ['author'] });
    if (!book) {
      throw new Error(`Book with ID ${id} not found`);
    }
  
    // Si `authorId` est fourni, trouver l'auteur et l'associer
    if (authorId) {
      const author = await this.authorsRepository.findOne({ where: { id: authorId } });
      if (!author) {
        throw new Error(`Author with ID ${authorId} not found`);
      }
      book.author = author; // Associer l'auteur au livre
    }
  
    // Appliquer les autres mises à jour
    Object.assign(book, otherUpdates);
  
    // Utiliser `save` pour mettre à jour le livre avec la relation
    return this.booksRepository.save(book);
  }

  async remove(id: number) {
    return await this.booksRepository.delete(id);
  }

  async getReviewsForBook(bookId: number) {
    return await this.reviewsService.findAllByBook(bookId);
  }

  async findByAuthorId(authorId: number): Promise<Book[]> {
    return this.booksRepository.find({ where: { author: { id: authorId } } });
  }

  async findAll(): Promise<Book[]> {
  return this.booksRepository.find({ 
    relations: ['author'], // Ajoutez cette ligne pour inclure l'auteur
  });
  }

}