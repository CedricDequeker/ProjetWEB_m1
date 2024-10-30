// src/authors/authors.controller.ts
import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { CreateAuthorDto } from './authors.dto';

@Controller('authors')
export class AuthorsController {
    constructor(private readonly authorsService: AuthorsService) {}

    @Post()
    create(@Body() createAuthorDto: CreateAuthorDto) {
        return this.authorsService.create(createAuthorDto);
    }

    @Get()
    findAll() {
        return this.authorsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
    return this.authorsService.findOne(+id);
    }
}
