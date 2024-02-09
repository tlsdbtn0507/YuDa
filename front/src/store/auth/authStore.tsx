import { create } from "zustand";

interface authStoreType{
  duration: string,
  setTokenTime:()=>void
}

const authStore = create<authStoreType>(set => ({
  duration:localStorage.getItem('duration') as string ,
  setTokenTime: () => {
    setInterval(() => {
      let duration = localStorage.getItem('duration') as string;
      localStorage.setItem('duration',`${+duration - 1000}`)
    },1000)
  }
}))

export default authStore