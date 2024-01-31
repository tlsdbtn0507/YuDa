import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DiaryEntity } from './diary.entity';
import { Repository } from 'typeorm';
import { CreateDiaryDTO } from './dto/createDiary.dto';
import { UserEntity } from 'src/user/user.entity';

@Injectable()
export class DiaryService {
  constructor(
    @InjectRepository(DiaryEntity)
    private diaryService : Repository<DiaryEntity>
  ) { }
  
  async createDiary(createDiaryDTO:CreateDiaryDTO,user:UserEntity) {
    const diary = this.diaryService.create({ ...createDiaryDTO, user });
    
    // await this.diaryService.save(diary)

    return diary
  }
}
