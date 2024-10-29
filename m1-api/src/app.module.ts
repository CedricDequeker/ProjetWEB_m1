import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './modules/database/database.module';
import { BookModule } from './books/book.module';
import { AuthorsModule } from './authors/authors.module';

@Module({
  imports: [DatabaseModule, BookModule, AuthorsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
