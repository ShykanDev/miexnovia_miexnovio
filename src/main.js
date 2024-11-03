import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaFlag, RiZhihuFill, FaPhoneAlt, HiMail, LaWhatsapp,IoLocation } from "oh-vue-icons/icons";
addIcons(FaFlag, RiZhihuFill, FaPhoneAlt, HiMail, LaWhatsapp,IoLocation);

const app = createApp(App)

app.component("v-icon", OhVueIcon)
app.use(router)
app.mount('#app')