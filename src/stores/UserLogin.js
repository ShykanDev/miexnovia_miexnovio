import { defineStore } from "pinia";

 export const  useUserLogin = defineStore('useUserLogin', {
  state: () => {
    return {
      userLogged: false,
      userName: null
    }
  },
  getters: {
    getUser: (state) => state.userLogged,
    getUserName: (state) => state.userName
  },
  actions: {
    setUserLogged() {
      this.userLogged = true;
    },
    setUserName(name) {
      this.userName = name
    },
    setUserNotLogged() {
      this.userLogged = false;
    }
  }
})