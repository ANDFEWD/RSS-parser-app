import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsNotEmpty, IsOptional } from 'class-validator';

@Entity()
export class Posts {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @IsNotEmpty()
  @Column({
    default: '',
  })
  title: string;

  @IsOptional()
  @Column({
    default: '',
  })
  link: string;

  @IsOptional()
  @Column({
    default: '',
  })
  pubDate: string;

  @IsOptional()
  @Column({
    default: '',
  })
  guid: string;

  @IsOptional()
  @Column({
    default: '',
  })
  description: string;

  @IsOptional()
  @Column({
    default: '',
  })
  category: string;

  @IsOptional()
  @Column({
    default: '',
  })
  categories: string;

  @IsOptional()
  @Column({
    default: '',
  })
  enclosure: string;

  @IsOptional()
  @Column({
    default: '',
  })
  content: string;

  @IsOptional()
  @Column({
    default: '',
  })
  contentSnippet: string;

  @IsOptional()
  @Column({
    default: '',
  })
  isoDate: string;
}
