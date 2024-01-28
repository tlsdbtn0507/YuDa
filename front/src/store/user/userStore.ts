import { create } from "zustand";

interface UserState  {
  pw: string,
  pwCheck: boolean,
  accessToken:string,
  setUserPw: (pw: string) => void,
  setAccToken:(token:string)=>void
  setUserPWCheck : (check:boolean) =>void
}

const userStore = create<UserState>((set) => ({
  pw: '',
  pwCheck: false,
  accessToken:'',
  setUserPw: (pw) => set(state => ({ pw })),
  setAccToken:(accessToken)=>(set({accessToken})),
  setUserPWCheck: (check) => set(state => ({ pwCheck: check })),
}))

export default userStore