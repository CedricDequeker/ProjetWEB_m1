//creation d'un DTO pour les livres et les auteurs, sert à valider les données entrantes

import { IsString, IsNumber, IsOptional } from 'class-validator';


export class CreateBookDto {
    @IsString()
    title: string;
    @IsString()
    publicationDate: string;
    @IsNumber()
    price: number;
    @IsNumber()
    authorId: number;
}

export class UpdateBookDto {
    @IsString()
    title: string;
    @IsString()
    publicationDate: string;
    @IsNumber()
    price: number;
    @IsNumber()
    authorId: number;
}
