import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { CreateReviewDto } from '../reviews/reviews.dto';

@Controller('reviews/book')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}


  @Post('/:id')
  create(@Param('id') id: string, @Body() createReviewDto: CreateReviewDto) {
    return this.reviewsService.create(createReviewDto,id ); 
  }


  @Get('/:bookId')
  findAllByBook(@Param('bookId') bookId: string) {
    return this.reviewsService.findAllByBook(+bookId);
  }
}
