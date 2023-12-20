import { redirect } from "react-router";

interface sendSignObj {
  request:Request
}

interface toSendDataObj {
  [index:string]:string
}

export const sendSign = async ({request}:sendSignObj) =>{
  const toSendData:toSendDataObj = {}

  const data = await request.formData();
  data.forEach((e,i)=>{
    toSendData[`${i}`] = e as string
  })

  console.log(toSendData)
  return redirect('/1')
}