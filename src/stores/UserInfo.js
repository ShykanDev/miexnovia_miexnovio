import { defineStore } from "pinia";

 export const  useUserInfo = defineStore('useUserInfo', {
  state: () => {
    return {
      userName: null,
      userCookies: true,
    }
  },
  getters: {
    getUserName: (state) => state.userName,
    getUserCookies: (state) => state.userCookies,
  },
  actions: {
    setUserName(name) {
      this.userName = name
    },
    setUserCookies(cookies) {
      this.userCookies = cookies
    },
  },
  persist: true
})