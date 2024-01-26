import { IsNotEmpty } from "class-validator";

export class SignUserDto{
  @IsNotEmpty()
  userId:string
    
  @IsNotEmpty()
  pw:string
}