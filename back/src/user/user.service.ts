import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { UserRepository } from './user.repository';
import { CreateUserDto } from './dto/createUser.Dto';
import { SignUserDto } from './dto/signUserDto';
import * as bcrypt from 'bcryptjs'
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: UserRepository,
    private jwtService:JwtService
  ) { }
  async signUp(createUserDto:CreateUserDto) {
    return this.userRepository.signUp(createUserDto);
  }

  async checkIdDuple(idcheck:{id:string}) {
    const isIdDuple = await this.userRepository.findOne( {where:{userId:idcheck.id}} );
    return isIdDuple === null ? true : false;
  }

  async login(signUserDto:SignUserDto) {
    const { userId, pw } = signUserDto;
    const getUser = await this.userRepository.findOne({ where: { userId } });

    if (getUser && (await bcrypt.compare(pw, getUser.pw))) {
      const payload = { userId };
      const accesToken = await this.jwtService.sign(payload);

      return { accesToken };
    }
    else throw new UnauthorizedException('로그인 실패');

  }

}
