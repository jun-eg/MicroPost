import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { UserController } from './user.controller';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: UserService, // UserServiceを差し替える
          useValue: {
            getUser: jest.fn().mockReturnValue({}), // getUser関数を差し替える
          },
        },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  // テスト本体
  it('should be defined', async () => {
    const controller = new UserController(service); // テスト対象のコントローラ作成
    await controller.getUser(1, 'xxx-xxx-xxx-xxx'); // getUser関数の呼び出し
    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(service.getUser).toHaveBeenCalledTimes(1); // 呼び出し回数の確認
  });
});
