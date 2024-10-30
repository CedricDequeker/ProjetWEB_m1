//définit les attributs des objets Author et Book, et les relations entre eux

import { Entity, Column, OneToMany, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Author } from './author.entity';
import { Review } from './review.entity';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  publicationDate: string;

  @Column('decimal')
  price: number;

  @ManyToOne(() => Author, (author) => author.books)
  author: Author;

  @OneToMany(() => Review, (review) => review.book)
  reviews: Review[];
}
