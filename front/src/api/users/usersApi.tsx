import API from "../api";
import { redirect, useNavigate } from "react-router";

interface sendObj {
  request:Request
}

interface toSendDataObj {
  [index:string]:string
}

const toSendData = (data: FormData) => {
  const toReturn: toSendDataObj = {}
  data.forEach((e, i) => {
    if(i !== 'pwCheck') toReturn[`${i}`] = e as string
  });
  return toReturn
}


export const sendSign = async ({request}:sendObj) =>{
  // const toSendData:toSendDataObj = {}

  const formData = await request.formData();
  // data.forEach((e, i) => {
  //   if(i !== 'pwCheck') toSendData[`${i}`] = e as string
  // })

  try {
    const { data } = await API.post(`/user/signup`, toSendData(formData));
    return redirect(`/login`)
  } catch (error) {
    //에러 처리 핸들러 추가하기!
    console.log(error)
    throw new Error()
  }
}

export const checkIdDuple = async (idToCheckDuple:string):Promise<boolean> => {
  const res = await API.get(`/user/idcheck/${idToCheckDuple}`);
  return res.data
}

export const login = async ({ request }: sendObj) => {
  const formData = await request.formData();

  const {data} = await API.post(`/user/login`, toSendData(formData));
  console.log(data.accessToken);
  return null
}
