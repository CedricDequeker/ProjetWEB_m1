// src/authors/authors.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Author } from '../modules/database/author.entity';
import { CreateAuthorDto, UpdateAuthorDto } from './authors.dto';
import { Book } from '../modules/database/book.entity';


@Injectable()
export class AuthorsService {
  private authors: Author[] = [];
  constructor(
    @InjectRepository(Author)
    private authorsRepository: Repository<Author>,
  ) {}

  async create(createAuthorDto: CreateAuthorDto): Promise<Author> {
    const newAuthor = this.authorsRepository.create(createAuthorDto);
    return this.authorsRepository.save(newAuthor);
  }

  async remove(id: number) {
    return await this.authorsRepository.delete(id);
  }
  
  async findAll(): Promise<Author[]> {
    const authors = await this.authorsRepository.find({
        relations: ['books', 'books.reviews'], // inclure les relations des livres et des avis
    });

    // Calculer la note moyenne pour chaque auteur
    return authors.map(author => {
        const totalRating = author.books.reduce((sum, book) => {
            const bookRatings = book.reviews.map(review => review.rating); // Obtenez les évaluations du livre
            return sum + bookRatings.reduce((a, b) => a + b, 0); // Additionnez les évaluations
        }, 0);

        const totalReviews = author.books.reduce((count, book) => count + book.reviews.length, 0); // Comptez le nombre total d'avis

        // Calculez la note moyenne
        const averageRating = totalReviews > 0 ? (totalRating / totalReviews).toFixed(2) : 'N/A';

        return {
            ...author,
            averageRating: averageRating, // Ajoutez la note moyenne à l'objet auteur
        };
    }); 
  }



  async findOne(id: number): Promise<Author> {
    const author = await this.authorsRepository.findOne({ where: { id }, relations: ['books'] });
    if (!author) {
      throw new NotFoundException(`Auteur avec l'ID ${id} non trouvé`);
    }
    return author;
  }

  async update(id: number, updateAuthorDto: UpdateAuthorDto): Promise<Author> {
    // Vérifie si l'auteur existe dans la base de données
    const author = await this.authorsRepository.findOne({ where: { id } });
    if (!author) {
        throw new NotFoundException(`Auteur avec l'ID ${id} non trouvé`);
    }

    // Met à jour les propriétés de l'auteur
    Object.assign(author, updateAuthorDto);
    // Enregistre les modifications dans la base de données
    return this.authorsRepository.save(author);
  }
  
  async findAllAuthors(): Promise<Author[]> {
    return await this.authorsRepository.find({ relations: ['books'] });// Inclure les livres dans la réponse
  }
}
