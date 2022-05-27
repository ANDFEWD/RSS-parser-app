import { IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto {
  @ApiProperty({ type: String, description: 'id' })
  @IsOptional()
  id: string;

  @ApiProperty({ type: String, description: 'title' })
  @IsNotEmpty()
  title: string;

  @ApiProperty({ type: String, description: 'link' })
  @IsOptional()
  link: string;

  @ApiProperty({ type: String, description: 'post date and time' })
  @IsOptional()
  pubDate: string;

  @ApiProperty({ type: String, description: 'guid' })
  @IsOptional()
  guid: string;

  @ApiProperty({ type: String, description: 'description' })
  @IsOptional()
  description: string;

  @ApiProperty({ type: String, description: 'category' })
  @IsOptional()
  category: string;

  @ApiProperty({ type: String, description: 'categories' })
  @IsOptional()
  categories: string;

  @ApiProperty({ type: String, description: 'enclosure' })
  @IsOptional()
  enclosure: string;

  @ApiProperty({ type: String, description: 'content' })
  @IsOptional()
  content: string;

  @ApiProperty({ type: String, description: 'contentSnippet' })
  @IsOptional()
  contentSnippet: string;

  @ApiProperty({ type: String, description: 'isoDate' })
  @IsOptional()
  isoDate: string;
}
