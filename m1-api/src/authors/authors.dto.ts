import { IsString, IsOptional } from 'class-validator';

export class CreateAuthorDto {
    @IsString()
    name: string;
    @IsOptional()
    biography?: string;
}