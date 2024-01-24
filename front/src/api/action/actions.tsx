import { AxiosError } from "axios";
import API from "../api";
import { redirect, useNavigate } from "react-router";

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
    const {data} = await API.post(`/user/signup`, toSendData);
    console.log(`${data.userId}`)
    
    return redirect(`/main`)
    // navigate('/main')
  } catch (error) {
    //에러 처리 핸들러 추가하기!
    console.log(error)
    throw new Error()
  }
  //로그인 성공 알림 후 '/login'이동

  //로그인 성공 알린 후 메인 페이지 이동
  
}
