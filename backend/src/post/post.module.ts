import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MicroPost } from '../entities/microposts.entity';

import { Auth } from '../entities/auth.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MicroPost, Auth])],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
