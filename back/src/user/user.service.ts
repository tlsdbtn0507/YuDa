import { ConflictException, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
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
    private readonly userRepository: UserRepository,
    private jwtService:JwtService
  ) { }
  async signUp(createUserDto: CreateUserDto): Promise<UserEntity> {
    const { userId, name, pw } = createUserDto;

    const salt = await bcrypt.genSalt();
    
    const hashedPw = await bcrypt.hash(pw, salt);

    const user = this.userRepository.create({ userId, name, pw:hashedPw });

    try {
      await this.userRepository.save(user);
      return user
    } catch (error) {
      if (error.code === '23505') throw new ConflictException('이미 존재하는 아이디입니다');
      else throw new InternalServerErrorException();
    }
  }

  async checkIdDuple(idcheck:{id:string}) {
    const isIdDuple = await this.userRepository.findOne( {where:{userId:idcheck.id}} );
    return isIdDuple === null ? true : false;
  }

  async login(signUserDto:SignUserDto) {
    const { id, pw } = signUserDto;
    const getUser = await this.userRepository.findOne({ where: { userId:id } });

    if (getUser && (await bcrypt.compare(pw, getUser.pw))) {
      const payload = { id,name:getUser.name };
      const refreshToken = await this.jwtService.sign({
       id, expiresIn: process.env.JWT_EXPIRES_REFRESH
      });
      const accessToken = await this.jwtService.sign(payload)

      return { accessToken,refreshToken };
    }
    else throw new UnauthorizedException('로그인 실패');

  }

}
