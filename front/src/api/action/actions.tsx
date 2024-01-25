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
    const { data } = await API.post(`/user/signup`, toSendData);
    return redirect(`/login`)
  } catch (error) {
    //에러 처리 핸들러 추가하기!
    console.log(error)
    throw new Error()
  }
}
