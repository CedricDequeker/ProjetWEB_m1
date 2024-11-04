import { IsString, IsOptional } from 'class-validator';

export class CreateAuthorDto {
    @IsString()
    name: string;
    @IsOptional()
    biography?: string;
    @IsOptional()
    photoUrl?: string; // Champ optionnel pour la création
}

export class UpdateAuthorDto {
    name?: string;
    biography?: string;
    photoUrl?: string; // Champ optionnel pour la mise à jour
}