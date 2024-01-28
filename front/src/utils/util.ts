import { toSendDataObj } from "../model/types";


export const toSendData = (data: FormData) => {
  const toReturn: toSendDataObj = {};
  data.forEach((e, i) => {
    if(i !== 'pwCheck') toReturn[`${i}`] = e as string
  });
  return toReturn
}
