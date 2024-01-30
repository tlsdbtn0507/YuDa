import { Body, Controller, Param, Post ,Get, UsePipes, ValidationPipe, Res} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/createUser.Dto';
import { SignUserDto } from './dto/signUserDto';
import { Response } from 'express';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) { }
  
  @Post('/signup')
  @UsePipes(ValidationPipe)
  createUser(@Body() creatUserDto: CreateUserDto) {
    return this.userService.signUp(creatUserDto)
  }

  @Get('/idcheck/:id')
  checkIdDuple(@Param() id: {id:string} ) {
    return this.userService.checkIdDuple(id)
  }

  @Post('/login')
  async  login(
    @Res({ passthrough: true }) res: Response,
    @Body() signUserDto: SignUserDto, 
  ) {
    
    const { accessToken } = await this.userService.login(signUserDto);

    res.cookie('Auth', accessToken, {
      expires: new Date(Date.now() + +process.env.JWT_EXPIRES_ACCESS) ,
      httpOnly:true
    })
    
    return this.userService.login(signUserDto);
  }
}
