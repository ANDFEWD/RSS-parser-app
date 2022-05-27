import { Injectable } from '@nestjs/common';
import { Posts } from './post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Posts)
    private readonly postRepository: Repository<Posts>,
  ) {}

  async getOnePost(id: string): Promise<Posts> {
    return await this.postRepository.findOneBy({ id: id });
  }

  async removePost(id: string): Promise<string> {
    await this.postRepository.delete({ id });
    return id;
  }

  async getAllPosts(): Promise<Posts[]> {
    return await this.postRepository.find();
  }

  async createPost(post: CreatePostDto): Promise<Posts> {
    return this.postRepository.save(post);
  }

  async updatePost(id: string, post: Posts): Promise<Posts> {
    await this.postRepository.update({ id: id }, { ...post });
    return post;
  }
}
