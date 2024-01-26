import { Body, Controller, Param, Post ,Get} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/createUser.Dto';
import { SignUserDto } from './dto/signUserDto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) { }
  
  @Post('/signup')
  createUser(@Body() creatUserDto: CreateUserDto) {
    return this.userService.signUp(creatUserDto)
  }

  @Get('/idcheck/:id')
  checkIdDuple(@Param() id: {id:string} ) {
    return this.userService.checkIdDuple(id)
  }

  @Post('/login')
  login(@Param() signUserDto: SignUserDto) {
    return this.userService.login(signUserDto);
  }
}
