<template>
    <div class="">
        <MainLayout>
            <template #main>
                <div class="flex flex-col-reverse min-h-screen mt-10 md:mt-0 lg:flex-row">
                    <!-- Left Section -->
                    <div class="w-full p-12 text-black bg-white lg:w-1/2">
                        <div class="mb-8">
                            <i class="text-4xl fas fa-mobile-alt"></i>
                            <span class="ml-2 text-3xl font-bold">Comparte tus experiencias</span>
                        </div>
                        <h1 class="mb-4 text-3xl font-bold">Interactua con otros usuarios, y aprende de sus experiencias</h1>
                        <!-- <p class="mb-4">Inicia Sesion para poder agregar un comentario</p>
                        <p>Podrás ver los comentarios una vez que inicies sesion -->
                        <!-- </p> -->
                         <div class="flex justify-center">
                             <img class="w-1/2" src="../assets/img/chattingLogin.svg" alt="">
                         </div>
                    </div>
                    <!-- Right Section -->
                    <div class="flex items-center justify-center w-full p-8 lg:w-1/2">
                        <div class="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
                            <div class="flex justify-between mb-4">
                                <a href="#" class="text-blue-500 border-b-2 border-blue-500">Login</a>
                                <!-- router link to register -->
                                 <RouterLink :to="{ name: 'register' }" class="text-gray-500">Registrate</RouterLink>
                                <!-- <a href="#" class="text-gray-500">Registrarse</a> -->
                            </div>
                            <form>
                                <h2 class="mb-4 text-2xl font-bold text-center text-gray-900">Iniciar sesión</h2>
                                <div class="mb-4">
                                    <input  v-model="email" type="email" placeholder="Correo"
                                        class="w-full p-3 bg-gray-100 border rounded">
                                </div>
                                <div class="mb-4">
                                    <input v-model="password" type="password" placeholder="Contraseña"
                                        class="w-full p-3 bg-gray-100 border rounded">
                                </div>
                                <h3 v-if="errorWhileLogin" class="mb-4 text-sm font-medium text-center text-rose-500">Error al iniciar sesión, verifique sus credenciales</h3>
                            
                                <button @click.prevent="handleLogin" class="w-full p-3 text-white bg-blue-500 rounded">Iniciar sesión</button>
                            </form>

                        </div>
                    </div>
                </div>  
            </template>
        </MainLayout>
    </div>
</template>

<script lang="ts" setup>
import { RouterLink, useRouter } from 'vue-router';
import MainLayout from '../layouts/MainLayout.vue';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { ref } from 'vue';
import { useUserLogin } from '../stores/UserLogin';


const auth =  getAuth();

const email = ref('');
const password = ref('');

let errorWhileLogin = ref(false);

const storeUser = useUserLogin();
const router = useRouter();
const handleLogin = async() => {
    errorWhileLogin.value = false;
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value);
        console.log(userCredential);
        storeUser.setUserLogged();
        router.push({ name: 'comments' });
    } catch (error) {
        errorWhileLogin.value = true;
        storeUser.setUserNotLogged();
        console.log(error);
    }
}
</script>

<style scoped>

</style>

