import { defineStore } from "pinia";

 export const  useUserInfo = defineStore('useUserInfo', {
  state: () => {
    return {
      userName: null
    }
  },
  getters: {
    getUserName: (state) => state.userName
  },
  actions: {
    setUserName(name) {
      this.userName = name
    },
  },
  persist: true
})