<template>
    <MainLayout>
        <template #main>
            <div class="flex justify-center w-full">
        <div class="flex items-center justify-center w-full min-h-screen bg-gray-50">
    <div class="w-full max-w-md p-6 space-y-6 bg-white rounded-lg shadow-md">
        <!-- Título -->
        <h2 class="text-2xl font-bold text-center text-sky-800">
            Iniciar sesión
        </h2>
        
        <!-- Formulario de inicio de sesión -->
        <form class="space-y-4">
            <!-- Campo de Correo Electrónico -->
            <div>
                <label for="email" class="block text-sm font-medium text-gray-700">
                    Correo Electrónico
                </label>
                <input v-model="email" type="email" id="email" name="email" placeholder="tucorreo@ejemplo.com" 
                       class="block w-full px-4 py-2 mt-1 text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:ring-sky-500 focus:border-sky-500" 
                       required>
            </div>

            <!-- Campo de Contraseña -->
            <div>
                <label for="password" class="block text-sm font-medium text-gray-700">
                    Contraseña
                </label>
                <input  v-model="password" type="password" id="password" name="password" placeholder="********"
                       class="block w-full px-4 py-2 mt-1 text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:ring-sky-500 focus:border-sky-500" 
                       required>
            </div>

            <!-- Botón de inicio de sesión -->
            <div>
                <button @click.prevent="handleLogin" type="submit" class="w-full px-4 py-2 font-semibold text-white transition duration-300 rounded-lg bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50">
                    Iniciar sesión
                </button>
            </div>
        </form>
        
        <!-- Enlace para registrarse o recuperar la contraseña -->
        <div class="text-sm text-center text-gray-500">
            ¿No tienes una cuenta? <RouterLink :to="{name: 'register'}" class="font-semibold text-sky-800 hover:underline">Regístrate</RouterLink> <br>
          
        </div>
    </div>
</div>

    </div>
        </template>
    </MainLayout>
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

const storeUser = useUserLogin();
const router = useRouter();
const handleLogin = async() => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value);
        console.log(userCredential);
        storeUser.setUserLogged();
        router.push({ name: 'comments' });
    } catch (error) {
        storeUser.setUserNotLogged();
        console.log(error);
    }
}
</script>

<style scoped>

</style>