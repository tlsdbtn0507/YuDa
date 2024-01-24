import API from "../api";

export const checkIdDuple = async (idToCheckDuple:string):Promise<boolean> => {
  const res = await API.get(`/user/idcheck/${idToCheckDuple}`);
  console.log(res)
  return res.data

}