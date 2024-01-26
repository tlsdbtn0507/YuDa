import { create } from "zustand";

interface UserState  {
  pw: string,
  pwCheck:boolean
  setUserPw: (pw: string) => void
  setUserPWCheck : (check:boolean) =>void
}

const userStore = create<UserState>((set) => ({
  pw: '',
  pwCheck:false,
  setUserPw: (pw) => set(state => ({ pw })),
  setUserPWCheck : (check)=>set(state => ({pwCheck:check}))
}))

export default userStore