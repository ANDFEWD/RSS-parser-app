import { Module } from '@nestjs/common';
import { RssService } from './rss-parser.service';
import { PostsModule } from '../posts/posts.module';

@Module({
  imports: [PostsModule],
  providers: [RssService],
  exports: [RssService],
})
export class RssModule {}
