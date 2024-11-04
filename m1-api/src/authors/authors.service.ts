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

  findAll() {
    return this.authorsRepository.find();
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
    return await this.authorsRepository.find({ relations: ['books'] });
  }
}
