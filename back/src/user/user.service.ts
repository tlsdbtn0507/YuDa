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
    console.log(createUserDto)
    // return this.userRepository.save
  }
}
