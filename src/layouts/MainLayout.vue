<template>
    <div class="">
        <header>
            <div class="w-full overflow-hidden font-poppins">
                <nav class="fixed z-50 w-full text-black bg-white shadow-md ">
                    <a class="absolute z-50 w-6 lg:top-4 lg:right-[5%] right-[10%] lg:w-auto md:bottom-2 md:right-2 " >
                        <img class="w-8 " src="../assets/img/sslTop.png" alt="">
                    </a>
                    <a class="absolute z-50 w-6 lg:top-2 lg:right-0 right-2 lg:w-auto" href="https://www.prasadam.mx">
                        <img class="w-8 " src="../assets/img/logoPrasadam.png" alt="">
                    </a>
                    <div class="px-1 py-1 mx-auto">
                        <router-link 
            :class="{'animate-fade-down': visibleTitle === 1, 'opacity-0': visibleTitle !== 1}" 
            to="/" 
            class="absolute text-xl font-bold text-purple-800">
            miexnovia.com.mx
        </router-link>
        <router-link 
            :class="{'animate-fade-down': visibleTitle === 2, 'opacity-0': visibleTitle !== 2}" 
            to="/" 
            class="absolute text-xl font-bold text-sky-800">
            miexnovio.com
        </router-link>
        <router-link 
            :class="{'animate-fade-down': visibleTitle === 3, 'opacity-0': visibleTitle !== 3}" 
            to="/" 
            class="absolute text-xl font-bold text-green-800">
            mipareja.net
        </router-link>
        <router-link 
            :class="{'animate-fade-down': visibleTitle === 4, 'opacity-0': visibleTitle !== 4}" 
            to="/" 
            class="absolute text-xl font-bold text-red-800">
            miexpareja.net
        </router-link>
                        <div class="flex flex-col items-end justify-end pb-1 min-h-16">
                            <div class="z-40 flex flex-wrap items-baseline justify-center w-full mt-2 space-y-1 font-medium font-poppins">
                                <div class="flex flex-wrap items-center justify-center gap-1 pr-1 mt-5">
                                        <router-link :class="{ 'bg-emerald-600 text-white': route.name === 'home', 'text-gray-700 hover:text-white hover:bg-emerald-500': route.name !== 'home' }" :to="{name: 'home'}"
                                            class="px-2 py-1 rounded-md autofill: ">Inicio</router-link>
                                        <router-link :class="{ 'bg-purple-600 text-white': route.name === 'exnovia', 'text-gray-700 hover:text-white hover:bg-purple-500': route.name !== 'exnovia' }" :to="{name: 'exnovia'}"
                                        class="px-2 py-1 rounded-md autofill: ">Exnovia</router-link>
                                        <router-link  :class="{ 'bg-sky-800 text-white': route.name === 'exnovio', 'text-gray-700 hover:text-white hover:bg-sky-500': route.name !== 'exnovio' }"  :to="{name: 'exnovio'}"
                                        class="px-2 py-1 rounded-md autofill: ">Exnovio</router-link>
                                        <router-link :class="{ 'bg-orange-600 text-white': route.name === 'comments', 'text-gray-700 hover:text-white hover:bg-orange-500': route.name !== 'comments' }" :to="{name: 'comments'}"
                                        class="px-2 py-1 rounded-md autofill: ">Comentarios</router-link>
                                        <router-link :class="{ 'bg-orange-600 text-white': route.name === 'about', 'text-gray-700 hover:text-white hover:bg-orange-500': route.name !== 'exnovia' }" :to="{name: 'about'}"
                                        class="hidden px-2 py-1 rounded-md md:block">Nosotros</router-link>
                                        <!-- <router-link :class="{ 'bg-rose-600 text-white': route.name === 'comments', 'text-gray-700 hover:text-white hover:bg-rose-500': route.name !== 'comments' }" :to="{name: 'comments'}"
                                        class="px-2 py-1 rounded-md autofill: ">Comentarios</router-link> -->

                                    <div class="flex items-center gap-1">
                                        <p>Bienvenido!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
        <main class="mt-12 overflow-hidden font-poppins">
            <slot name="main">
                
            </slot>
            <div class="relative z-30 py-6 text-white rounded-lg shadow-md bg-slate-800 px-7">
                
                <img src="../assets/img/sslCert01.png" class="absolute w-20 top-2 right-1" alt="">
  <h3 class="mb-4 text-3xl font-bold text-left text-orange-400">Contacto</h3>

  <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
    <div class="flex items-center justify-center gap-2">
      <v-icon name="io-location" scale="1.5" class="text-orange-500 transition-colors " />
      <a href="https://www.google.com.mx/maps/place/Gutenberg+128,+Anzures,+Miguel+Hidalgo,+11590+Ciudad+de+México,+CDMX/@19.4323958,-99.1783169,17z/data=!3m1!4b1!4m5!3m4!1s0x85d1f8b2df5f9bbd:0x81205745d02f7168!8m2!3d19.4323958!4d-99.1761282"
         class="text-sm transition-colors font-poppins hover:text-orange-400"
         target="_blank" rel="noopener noreferrer">
        Gutenberg #128 Anzures, Miguel Hidalgo, 11590 Ciudad de México
      </a>
    </div>

    <div class="flex items-center justify-center gap-2">
      <v-icon name="fa-phone-alt" scale="1.5" class="text-orange-600 transition-colors "  />
      <div class="flex flex-col">
        <a href="tel:+525563950178" class="text-sm transition-colors font-poppins hover:text-orange-400">+52 55 6395 0178</a>
        <a href="tel:+525563950179" class="text-sm transition-colors font-poppins hover:text-orange-400">+52 55 6395 0179</a>
      </div>
    </div>

    <div class="flex items-center justify-center gap-2">
      <v-icon name="hi-mail" scale="1.5" class="text-orange-600 transition-colors " />
      <a href="mailto:informes@prasadam.mx" class="text-sm transition-colors font-poppins hover:text-orange-400">informes@prasadam.mx</a>
    </div>

    <div class="flex items-center justify-center gap-2 mb-2">
      <v-icon name="la-whatsapp" scale="1.5" class="transition-colors text-emerald-400 hover:text-emerald-300" />
      <a href="https://wa.me/525562516687"
         class="text-sm font-medium transition-colors font-poppins text-emerald-400 hover:text-emerald-300"
         target="_blank" rel="noopener noreferrer">
        +52 5562516687
      </a>
    </div>
  </div>
  <!-- Uncomment this section to include the map -->
  
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.5395970522604!2d-99.1760704!3d19.4322888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f8b32758939b%3A0xf34fbd07bc47d6dd!2sGutenberg%20128%2C%20Anzures%2C%20Miguel%20Hidalgo%2C%2011590%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1sen!2smx!4v1730328617197!5m2!1sen!2smx"
  style="border:0;" allowfullscreen="false" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="w-full h-64"></iframe>
    <div class="container mx-auto mt-2 text-sm text-center ">
        <p>&copy; 2024 Todos los derechos reservados</p>
        <p>Design: PACA</p>
    </div>
 
</div>

        </main>
        <footer class="z-30">

        </footer>
    </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
const route = useRoute();
import { onMounted, ref } from 'vue';
import { useUserLogin } from '../stores/UserLogin';
import { useUserInfo } from '../stores/UserInfo';


const visibleTitle = ref(1); // 1, 2, 3 o 4 según el enlace visible.

        const setTitle = () => {
            switch (route.name) {
                case 'home':
                case 'exnovia':
                    visibleTitle.value = 1;
                    break;
                case 'exnovio':
                    visibleTitle.value = 2;
                    break;
                case 'pareja':
                    visibleTitle.value = 3;
                    break;
                case 'expareja':
                    visibleTitle.value = 4;
                    break;
                default:
                    visibleTitle.value = 1;
                    break;
            }
        };

        const switchTitle = () => {
            visibleTitle.value = visibleTitle.value < 4 ? visibleTitle.value + 1 : 1;
        };

        onMounted(() => {
            setTitle();
            setInterval(switchTitle, 2000);
        });




</script>

<style scoped></style>