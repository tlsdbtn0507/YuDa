import { AxiosError } from "axios";
import API from "../api";

interface sendSignObj {
  request:Request
}

interface toSendDataObj {
  [index:string]:string
}

export const sendSign = async ({request}:sendSignObj) =>{
  const toSendData:toSendDataObj = {}

  const data = await request.formData();
  data.forEach((e, i) => {
    if(i !== 'pwCheck') toSendData[`${i}`] = e as string
  })

  try {
    const res = await API.post(`/user/signup`,  {toSendData} );
  } catch (error) {
    //에러 처리 핸들러 추가하기!
    console.log(error)
    throw new Error()
  }
  //로그인 성공 알림 후 '/login'이동

  //로그인 성공 알린 후 메인 페이지 이동

  return null
}

export const checkIdDuple = async (idToCheckDuple:string) => {
  const res = await API.post(`/idcheck`, { idToCheckDuple });
  console.log(idToCheckDuple)

}