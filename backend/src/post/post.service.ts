import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Auth } from 'src/entities/auth.entity';
import { MicroPost } from 'src/entities/microposts.entity';
import { Equal, MoreThan, Repository } from 'typeorm';

type ResultType = {
  id: number;
  user_id: number;
  user_name: string;
  content: string;
  created_at?: Date;
  updated_at?: Date;
};

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(MicroPost)
    private microPostsRepository: Repository<MicroPost>,

    @InjectRepository(Auth)
    private authRepository: Repository<Auth>,
  ) {}

  async createPost(message: string, token: string) {
    // ログイン済みかチェック
    const now = new Date();
    const auth = await this.authRepository.findOne({
      where: {
        token: Equal(token),
        expire_at: MoreThan(now),
      },
    });
    if (!auth) {
      throw new ForbiddenException();
    }
    const record = {
      user_id: auth.user_id,
      content: message,
    };
    await this.microPostsRepository.save(record);
  }

  async getList(
    token: string,
    start: number = 0,
    nr_records: number = 1,
  ): Promise<ResultType[]> {
    // ログイン済みかチェック
    const now = new Date();
    const auth = await this.authRepository.findOne({
      where: {
        token: Equal(token),
        expire_at: MoreThan(now),
      },
    });

    if (!auth) {
      throw new ForbiddenException();
    }
    const qb = this.microPostsRepository
      .createQueryBuilder('micro_post')
      .leftJoinAndSelect('user', 'user', 'user.id=micro_post.user_id')

      .select([
        'micro_post.id as id',
        'user.name as user_name',
        'micro_post.user_id as user_id',
        'micro_post.content as content',
        'micro_post.created_at as created_at',
      ])

      .orderBy('micro_post.created_at', 'DESC')
      .offset(start)
      .limit(nr_records);

    const records = await qb.getRawMany<ResultType>();
    console.log('getList', ...records);
    return records;
  }

  async delete(id: number, token: string) {
    const now = new Date();
    const auth = await this.authRepository.findOne({
      where: {
        token: Equal(token),
        expire_at: MoreThan(now),
      },
    });
    if (!auth) {
      throw new ForbiddenException();
    }

    const deletePost = await this.microPostsRepository.findOne({
      where: {
        id: Equal(id),
      },
    });

    if (!deletePost) {
      throw new NotFoundException();
    }

    if (deletePost.user_id === auth.user_id) {
      const deletedPost = await this.microPostsRepository.delete({
        id: Equal(id),
      });
      console.log('post消去', deletedPost);
    }
  }
}
