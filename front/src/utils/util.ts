import { toSendDataObj } from "../model/types";
import { jwtDecode } from 'jwt-decode';


export const toSendData = (data: FormData) => {
  const toReturn: toSendDataObj = {};
  data.forEach((e, i) => {
    if(i !== 'pwCheck') toReturn[`${i}`] = e as string
  });
  return toReturn
}

export const tokenTimer = () => {
  const token = localStorage.getItem('refreshToken') as string;
  const delay = process.env.REACT_APP_DELAY as string;
  
  const { expiresIn , iat } = jwtDecode<{ expiresIn: number, iat: number }>(token);
  const condition = new Date().getTime() >= +expiresIn + iat*1000 - +delay;

  if (condition) {
    console.log('bye');
    return
  }
  else return
}


export const tokenSet = (token:string) => {
  localStorage.setItem('refreshToken', token);
}