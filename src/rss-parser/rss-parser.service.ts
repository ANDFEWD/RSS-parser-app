import { Injectable } from '@nestjs/common';
import * as Parser from 'rss-parser';
import { Cron } from '@nestjs/schedule';
import { PostsService } from '../posts/posts.service';
import { Posts } from '../posts/post.entity';

@Injectable()
export class RssService {
  private readonly parser = new Parser();

  constructor(private postService: PostsService) {}

  @Cron('45 * * * * *')
  async handleCron() {
    await this.parseBlogRssUrl();
  }

  public async parseBlogRssUrl(): Promise<Posts[]> {
    const urlRss = 'https://football.ua/rss2.ashx';
    const parsedPosts = (await this.parser.parseURL(urlRss))
      .items as unknown as Posts[];
    const postsData: Posts[] = await this.postService.getAllPosts();

    parsedPosts.forEach((item) => {
      const postCheck = this.checkPostInDb(item, postsData);

      if (postCheck) {
        this.postService.updatePost(item.id, item);
      } else {
        this.postService.createPost(item);
      }
    });

    return parsedPosts;
  }

  checkPostInDb(post: Posts, postsData: Posts[]) {
    return postsData.find((item) => {
      return item.guid === post.guid;
    });
  }
}
