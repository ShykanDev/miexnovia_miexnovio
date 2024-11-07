<template>
  <div class="flex items-center justify-center w-full bg-gray-50">
      <MainLayout>
          <template #main>
            <article v-show="accountCreated" class="fixed top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-85">
                <div class="flex flex-col items-center justify-center w-3/4 gap-2 p-1 text-center text-black bg-white rounded-lg font-poppins ">
                    <p>
                        Tu cuenta ha sido registrada!</p>
                    <p>Ahora puedes ir al login, para iniciar sesión</p>
                    <RouterLink :to="{name: 'login'}" class="px-4 py-2 mt-3 font-medium text-white rounded-md bg-sky-700 hover:bg-sky-800">Ir al Login</RouterLink>
                </div>
            </article>
              <div class="flex flex-col items-center justify-start min-h-screen p-6 pt-20 space-y-6 rounded-lg shadow-md bg-slate-50 md:pt-20 w-dvw lg:pt-9 " >
                  <!-- Título -->
                  <h2 class="text-4xl font-bold text-center text-sky-800">
                      Registrarse
                  </h2>

                  <!-- Formulario de registro -->
                  <form @submit.prevent="handleSubmit" class="w-full p-3 space-y-4 bg-white rounded-2xl md:py-6">
                      <!-- Campo de Nombre -->
                      <div>
                          <label for="name" class="block text-sm font-medium text-gray-700">
                              Nombre
                          </label>
                          <input
                              v-model="name"
                              type="text"
                              id="name"
                              placeholder="Escribe tu nombre"
                              class="block w-full px-4 py-2 mt-1 text-gray-900 border rounded-lg shadow-sm focus:ring-sky-500 focus:border-sky-500"
                              :class="{ 'border-red-500': errors.name }"
                          />
                          <p v-if="errors.name" class="mt-1 text-xs text-red-500">Por favor, ingresa un nombre válido.</p>
                      </div>

                      <!-- Campo de Edad -->
                      <div>
                          <label for="age" class="block text-sm font-medium text-gray-700">
                              Edad
                          </label>
                          <input
                              v-model="age"
                              type="number"
                              id="age"
                              placeholder="Escribe tu edad"
                              class="block w-full px-4 py-2 mt-1 text-gray-900 border rounded-lg shadow-sm focus:ring-sky-500 focus:border-sky-500"
                              :class="{ 'border-red-500': errors.age }"
                          />
                          <p v-if="errors.age" class="mt-1 text-xs text-red-500">Ingresa una edad válida (18+).</p>
                      </div>

                      <!-- Campo de Correo Electrónico -->
                      <div>
                          <label for="email" class="block text-sm font-medium text-gray-700">
                              Correo Electrónico
                          </label>
                          <input
                              v-model="email"
                              type="email"
                              id="email"
                              placeholder="tucorreo@ejemplo.com"
                              class="block w-full px-4 py-2 mt-1 text-gray-900 border rounded-lg shadow-sm focus:ring-sky-500 focus:border-sky-500"
                              :class="{ 'border-red-500': errors.email }"
                          />
                          <p v-if="errors.email" class="mt-1 text-xs text-red-500">Ingresa un correo electrónico válido.</p>
                      </div>

                      <!-- Campo de Contraseña -->
                      <div>
                          <label for="password" class="block text-sm font-medium text-gray-700">
                              Contraseña
                          </label>
                          <input
                              v-model="password"
                              type="password"
                              id="password"
                              placeholder="********"
                              class="block w-full px-4 py-2 mt-1 text-gray-900 border rounded-lg shadow-sm focus:ring-sky-500 focus:border-sky-500"
                              :class="{ 'border-red-500': errors.password }"
                          />
                          <p v-if="errors.password" class="mt-1 text-xs text-red-500">La contraseña debe tener al menos 8 caracteres.</p>
                      </div>

                      <!-- Campo de Confirmación de Contraseña -->
                      <div>
                          <label for="confirmPassword" class="block text-sm font-medium text-gray-700">
                              Confirmar Contraseña
                          </label>
                          <input
                              v-model="confirmPassword"
                              type="password"
                              id="confirmPassword"
                              placeholder="********"
                              class="block w-full px-4 py-2 mt-1 text-gray-900 border rounded-lg shadow-sm focus:ring-sky-500 focus:border-sky-500"
                              :class="{ 'border-red-500': errors.confirmPassword }"
                          />
                          <p v-if="errors.confirmPassword" class="mt-1 text-xs text-red-500">Las contraseñas no coinciden.</p>
                      </div>

                      <!-- Botón de registro -->
                      <div>
                          <button type="submit" class="w-full px-4 py-2 font-semibold text-white transition duration-300 rounded-lg bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50">
                              Registrarse
                          </button>
                      </div>
                  </form>
              </div>
          </template>
      </MainLayout>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import MainLayout from '../layouts/MainLayout.vue';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { useUserLogin } from '../stores/UserLogin';
import { useUserInfo } from '../stores/UserInfo';
// import { useUserInfo } from '../stores/UserInfo';

const auth = getAuth();
const name = ref('');
const age = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const accountCreated = ref(false);
const errors = ref({
  name: false,
  age: false,
  email: false,
  password: false,
  confirmPassword: false,
});

const storeUser = useUserLogin();

// Expresiones regulares para validación
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const userInfoStore = useUserInfo();
const handleSubmit = async () => {
  // Reiniciar errores
  errors.value = {
      name: false,
      age: false,
      email: false,
      password: false,
      confirmPassword: false,
  };

  // Validaciones
  errors.value.name = name.value.trim() === '';
  errors.value.age = age.value < 18 || age.value === '';
  errors.value.email = !emailRegex.test(email.value);
  errors.value.password = password.value.length < 8;
  errors.value.confirmPassword = password.value !== confirmPassword.value;

  // Verificar si todos los datos son válidos antes de enviar
  if (!errors.value.name && !errors.value.age && !errors.value.email && !errors.value.password && !errors.value.confirmPassword) {
      try {
          // Registro del usuario usando Firebase Authentication
          const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
          const user = userCredential.user;
          if (user) {
            // storeUser.setUser(name.value);
            userInfoStore.setUserName(name.value);
              console.log('Usuario registrado:', user);
              accountCreated.value = true;
          }
      } catch (error) {
          console.error('Error al registrar el usuario:', error);
      }
  }
};
</script>
