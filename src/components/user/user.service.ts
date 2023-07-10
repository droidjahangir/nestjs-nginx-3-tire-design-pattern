import { Inject, Injectable } from '@nestjs/common';
import { UserServiceInterface } from './interface/user.service.interface';
import { UserRepositoryInterface } from './interface/user.repository.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entity/user.entity';

@Injectable()
export class UserService implements UserServiceInterface {
  constructor(
    @Inject('UserRepositoryInterface')
    private readonly userRepository: UserRepositoryInterface,
  ) {}

  public async create(userDto: CreateUserDto): Promise<User> {
    const user = new User();
    user.email = userDto.email;
    user.password = userDto.password;
    return this.userRepository.create(user);
  }
}
