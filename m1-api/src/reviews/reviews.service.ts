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

    async create(createReviewDto: CreateReviewDto): Promise<Review> {
    const { rating, comment, bookId } = createReviewDto;

    const book = await this.booksRepository.findOne({ where: { id: bookId } });

    const review = this.reviewsRepository.create({
      rating,
      comment,
      book,
    });

    return this.reviewsRepository.save(review);
  }

  
    async findAllByBook(bookId: number): Promise<Review[]> {
    return this.reviewsRepository.find({
      where: { book: { id: bookId } },
      order: { createdAt: 'DESC' },
    });
  }
}
