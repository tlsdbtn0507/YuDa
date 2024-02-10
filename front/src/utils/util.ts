import { toSendDataObj } from "../model/types";


export const toSendData = (data: FormData) => {
  const toReturn: toSendDataObj = {};
  data.forEach((e, i) => {
    if(i !== 'pwCheck') toReturn[`${i}`] = e as string
  });
  return toReturn
}

const tokenTimer = () =>
  setInterval(() => {
    let duration = localStorage.getItem('duration') as string;
    localStorage.setItem('duration', `${+duration - 1000}`)
  }, 1000);


export const tokenSet = (token:string) => {
  localStorage.setItem('refreshToken', token);
  localStorage.setItem('duration', `${process.env.REACT_APP_DURATION}`);
  tokenTimer();
}