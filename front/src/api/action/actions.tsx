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
  data.forEach((e,i)=>{
    toSendData[`${i}`] = e as string
  })

  console.log(toSendData)
  return null
}

export const checkIdDuple = async (idToCheckDuple:string) => {
  // const res = await API.post(`/idcheck`, { idToCheckDuple });
  console.log(idToCheckDuple)

}