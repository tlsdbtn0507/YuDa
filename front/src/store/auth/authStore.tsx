import { create } from "zustand";

const authStore = create(set => ({
  duration:localStorage.getItem('duration'),
  setTokenTime: () => set({})
}))