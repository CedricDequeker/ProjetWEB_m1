//définit les attributs des objets Author et Book, et les relations entre eux

import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Book } from './book.entity';

@Entity()
export class Author {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  biography: string;

  @Column()
  photo: string;

  @OneToMany(() => Book, (book) => book.author)
  books: Book[];
}
