import { Test, TestingModule } from '@nestjs/testing';

import { UserController } from './user.controller';

describe('UserController', () => {
  let controller: UserController;

  // テストごとに毎回呼ばれる処理
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  // テスト本体
  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
