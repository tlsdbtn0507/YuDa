import { create } from "zustand";

interface UserState  {
  pw: string,
  pwCheck:boolean
  setUserPw: (pw: string) => void
  setUserPWCheck : () =>void
}

const userStore = create<UserState>((set) => ({
  pw: '',
  pwCheck:false,
  setUserPw: (pw) => set(state => ({ pw })),
  setUserPWCheck : ()=>set(state => ({pwCheck:!state.pwCheck}))
}))

export default userStore