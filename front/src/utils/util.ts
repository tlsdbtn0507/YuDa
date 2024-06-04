import { renewToken } from "../api/users/usersApi";
import { toSendDataObj } from "../model/types";

export const toSendData = (data: FormData) => {
  const toReturn: toSendDataObj = {};
  data.forEach((e, i) => {
    if(i !== 'pwCheck') toReturn[`${i}`] = e as string
  });
  return toReturn
}

export const checkRefreshTokenIsExpire = (iat: number | undefined) => {
  // const DELAY_TIME = process.env.REACT_APP_DELAY as string;
  const DELAY_TIME = 54000;
  const refreshedTime = iat as number * 1000;

  const refreshTime = refreshedTime + Number(DELAY_TIME);
  const now = Date.now();

  const delay = refreshTime - now;

  const recuirse = () => {
    renewToken(localStorage.getItem('refreshToken') as string);
    setTimeout(() => recuirse(), DELAY_TIME);
  }

  if (delay > 0) setTimeout(() => recuirse(), delay);
  else recuirse();
  
}