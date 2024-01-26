import { Repository } from "typeorm";
import { UserEntity } from "./user.entity";
import { CreateUserDto } from "./dto/createUser.Dto";
import * as bcrypt from 'bcryptjs'
import { ConflictException, InternalServerErrorException } from "@nestjs/common";

export class UserRepository extends Repository<UserEntity>{
  async signUp(createUserDto: CreateUserDto) {
    const { userId, name, pw } = createUserDto;

    const salt = await bcrypt.genSalt();
    
    const hashedPw = await bcrypt.hash(pw, salt);

    const user = this.create({ userId, name, pw:hashedPw });

    try {
      await this.save(user)
    } catch (error) {
      if (error.code === '23505') throw new ConflictException('이미 존재하는 아이디입니다');
      else throw new InternalServerErrorException();
    }
    return user
  };

  
}