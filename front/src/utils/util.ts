import { renewToken } from "../api/users/usersApi";
import { toSendDataObj } from "../model/types";

let timeoutId:null | ReturnType<typeof setTimeout> = null 


export const toSendData = (data: FormData) => {
  const toReturn: toSendDataObj = {};
  data.forEach((e, i) => {
    if(i !== 'pwCheck') toReturn[`${i}`] = e as string
  });
  return toReturn
}

export const checkRefreshTokenIsExpire = (iat: number | undefined) => {
  const DELAY_TIME = process.env.REACT_APP_DELAY as string;

  const refreshedTime = iat as number * 1000;

  const refreshTime = refreshedTime + Number(DELAY_TIME);
  const now = Date.now();

  const delay = refreshTime - now;

  const recuirse = async () => {

    const result = await renewToken(localStorage.getItem('refreshToken') as string);

    if (!result) return;

    timeoutId = setTimeout(() => recuirse(), +DELAY_TIME);
  };

  if (delay > 0) {
    timeoutId = setTimeout(() => recuirse(), delay);
  }
  else recuirse();
  
  return timeoutId;
}