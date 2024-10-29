import { IsString } from 'class-validator';

export class CreateAuthorDto {
    @IsString()
    name: string;
    @IsString()
    biography: string;
    @IsString()
    photo: string;
}

export class UpdateAuthorDto {
    @IsString()
    name: string;
    @IsString()
    biography: string;
    @IsString()
    photo: string;
}