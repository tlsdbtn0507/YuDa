import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { UserRepository } from './user.repository';
import { CreateUserDto } from './dto/createUser.Dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository:UserRepository
  ) { }
  
  async signUp(createUserDto: CreateUserDto) {
    const { userId, name, pw } = createUserDto;
    const res = this.userRepository.create({ userId, name, pw });

    await this.userRepository.save(res)
    return res
  }
}
