export type Dates = {
  date:string,
  day:string,
  month:string
}

export type Contents = {
  title:string,
  body:string
}

export type Img = {
  url:string
}

export interface DiarySummary{
  date:Dates,
  content:Contents,
  img:Img 
}

export interface sendObj {
  request:Request
}

export interface toSendDataObj {
  [index:string]:string
}