import { DiaryEntity } from "src/diary/diary.entity";
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
@Unique(['userId'])
export class UserEntity extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  userId: string
  
  @Column()
  pw: string
  
  @OneToMany( type=>DiaryEntity , diary=>diary.user  )
  diary:DiaryEntity
}