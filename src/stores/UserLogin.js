import { defineStore } from "pinia";

 export const  useUserLogin = defineStore('useUserLogin', {
  state: () => {
    return {
      userLogged: null
    }
  },
  getters: {
    getUser: (state) => state.userLogged
  },
  actions: {
    setUserLogged() {
      this.userLogged = true;
    },
    setUserNotLogged() {
      this.userLogged = false;
    }
  }
})