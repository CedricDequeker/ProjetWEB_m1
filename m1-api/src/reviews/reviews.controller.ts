import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { CreateReviewDto } from '../reviews/reviews.dto';

@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}


  @Post()
  create(@Body() createReviewDto: CreateReviewDto) {
    return this.reviewsService.create(createReviewDto);
  }


  @Get('/book/:bookId')
  findAllByBook(@Param('bookId') bookId: string) {
    return this.reviewsService.findAllByBook(+bookId);
  }
}
