import { renewToken } from "../api/users/usersApi";
import { toSendDataObj } from "../model/types";

export const toSendData = (data: FormData) => {
  const toReturn: toSendDataObj = {};
  data.forEach((e, i) => {
    if(i !== 'pwCheck') toReturn[`${i}`] = e as string
  });
  return toReturn
}

export const tokenSet = (token: string) => {
  localStorage.setItem('refreshToken', token);

  const refreshToken = localStorage.getItem('refreshToken') as string;

  const timer = process.env.REACT_APP_DELAY as string;

  setTimeout( async() => {
    const res = await renewToken(token);
    typeof res !== "boolean" && tokenSet(refreshToken)
  }, +timer);
}