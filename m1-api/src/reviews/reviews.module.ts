import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReviewsService } from './reviews.service';
import { ReviewsController } from './reviews.controller';
import { Review } from '../modules/database/review.entity';
import { Book } from '../modules/database/book.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Review, Book])],
  providers: [ReviewsService],
  controllers: [ReviewsController],
  exports: [TypeOrmModule],
})
export class ReviewsModule {}
