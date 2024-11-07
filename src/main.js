import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaFlag, RiZhihuFill, FaPhoneAlt, HiMail, LaWhatsapp, IoLocation,BiPencilFill,FaUserAlt,IoCalendar,CoFacebook,CoWhatsapp,CoTwitter,CoInstagram,HiChatAlt2,HiSolidUserGroup,LaUsersSolid } from "oh-vue-icons/icons";
import { initializeApp } from "firebase/app";
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

// Initialize AOS
AOS.init();

// Add icons to Oh Vue Icons
addIcons(FaFlag, RiZhihuFill, FaPhoneAlt, HiMail, LaWhatsapp, IoLocation,BiPencilFill,FaUserAlt,IoCalendar,CoFacebook,CoWhatsapp,CoTwitter,CoInstagram,HiChatAlt2,HiSolidUserGroup,LaUsersSolid);

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARO8NtBKkhz0yBJezEmQFFJ9lEHw04R2Y",
  authDomain: "miexnovia-prasadam.firebaseapp.com",
  projectId: "miexnovia-prasadam",
  storageBucket: "miexnovia-prasadam.firebasestorage.app",
  messagingSenderId: "785932011004",
  appId: "1:785932011004:web:3c8dc16c9aed3afdb59e79"
};

// Initialize Firebase
initializeApp(firebaseConfig);

// Create Pinia instance
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate)
// Create Vue app
const appVue = createApp(App);

// Use plugins
appVue.use(pinia);
appVue.component("v-icon", OhVueIcon);
appVue.use(router);

// Mount the app
appVue.mount('#app');
