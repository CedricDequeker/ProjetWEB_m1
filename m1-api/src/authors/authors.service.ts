// src/authors/authors.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Author } from '../modules/database/author.entity';
import { CreateAuthorDto } from './authors.dto';

@Injectable()
export class AuthorsService {
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
    const author = await this.authorsRepository.findOne({ where: { id } });
    if (!author) {
      throw new NotFoundException(`Auteur avec l'ID ${id} non trouvé`);
    }
    return author;
  }
}
