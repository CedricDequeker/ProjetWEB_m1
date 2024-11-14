import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Review } from '../modules/database/review.entity';
import { CreateReviewDto } from './reviews.dto';
import { Book } from '../modules/database/book.entity';

@Injectable()
export class ReviewsService {
  constructor(
    @InjectRepository(Review)
    private reviewsRepository: Repository<Review>,
    
    @InjectRepository(Book)
    private booksRepository: Repository<Book>,
  ) {}

  async create(createReviewDto: CreateReviewDto, bookId: string, ): Promise<Review> {
    const { rating, comment} = createReviewDto;

    const tempbookId=parseInt(bookId)

    // Récupérer le livre à partir du bookId
    const book = await this.booksRepository.findOne({ where: { id: tempbookId } });
    
    if (!book) {
      throw new NotFoundException(`Book with ID ${bookId} not found`);
    }

    // Créer un nouvel avis
    const review = this.reviewsRepository.create({
      rating,
      comment,
      book,
    });

    // Sauvegarder l'avis dans la base de données
    return this.reviewsRepository.save(review);
  }

  
  async findAllByBook(bookId: number): Promise<Review[]> {
    return this.reviewsRepository.find({
      where: { book: { id: bookId } },
      order: { createdAt: 'DESC' },
    });
  }
}
