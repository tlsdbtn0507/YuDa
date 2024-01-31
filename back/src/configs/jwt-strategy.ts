import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { InjectRepository } from "@nestjs/typeorm";
import { ExtractJwt, Strategy } from "passport-jwt";
import { UserRepository } from "../user/user.repository";
import * as config from 'config'
import { UserEntity } from "src/user/user.entity";

require('dotenv').config()

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: UserRepository,
  ) {
    super(
      {
        secretOrKey: process.env.JWT_SECRET_KEY || config.get('JWT_SECRET_KEY'),
        ignoreExpiration:false,
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
      })
     }
  async validate(payload) {
    const { id } = payload;
    const user: UserEntity = await this.userRepository.findOne({ where: { userId:id } });
    
    console.log(user)
    if (!user) throw new UnauthorizedException();
    return user
  }
}