import { Body, Controller, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { DiaryService } from './diary.service';
import { CreateDiaryDTO } from './dto/createDiary.dto';
import { GetUser } from 'src/configs/get-user.decorator';
import { UserEntity } from 'src/user/user.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('diary')
@UseGuards(AuthGuard())
export class DiaryController {
  constructor(private diaryService: DiaryService) { }
  

  @Post()
  @UsePipes(ValidationPipe)
  createDiary(
    @Body() createDiaryDTO: CreateDiaryDTO,
    @GetUser() user : UserEntity
  ) {
    return this.diaryService.createDiary(createDiaryDTO, user);
  }
}
