import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { Posts } from './post.entity';
import { CreatePostDto } from './dto/create-post.dto';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiCreatedResponse,
  ApiOkResponse,
} from '@nestjs/swagger';

@Controller('posts')
export class PostsController {
  constructor(private postService: PostsService) {}

  @Get()
  @ApiCreatedResponse({ description: 'Get All Posts' })
  public async getAllPosts(): Promise<Posts[]> {
    return await this.postService.getAllPosts();
  }

  @Get(':id')
  @ApiCreatedResponse({ description: 'Get Post by ID' })
  public async getOnePost(@Param('id') id: string): Promise<Posts> {
    return await this.postService.getOnePost(id);
  }

  @Post()
  @ApiOkResponse({ description: 'Post has been created successfully' })
  @ApiBadRequestResponse({ description: 'Fail to create a post' })
  @ApiBody({ type: CreatePostDto })
  public async createPost(
    @Body() createPostDto: CreatePostDto,
  ): Promise<Posts> {
    return await this.postService.createPost(createPostDto);
  }

  @Patch(':id')
  @ApiOkResponse({ description: 'Post has been updated successfully' })
  @ApiBadRequestResponse({ description: 'Fail to update a post' })
  @ApiBody({ type: CreatePostDto })
  public async updatePost(
    @Param('id') id: string,
    @Body() createPostDto: CreatePostDto,
  ): Promise<Posts> {
    return await this.postService.updatePost(id, createPostDto);
  }

  @Delete(':id')
  @ApiOkResponse({ description: 'Post has been deleted successfully' })
  @ApiBadRequestResponse({ description: 'Fail to delete a post' })
  @ApiBody({ type: CreatePostDto })
  public async deletePost(@Param('id') id: string): Promise<string> {
    return await this.postService.removePost(id);
  }
}
