<template>
  <div class="">
      <MainLayout>
          <template #main>
              <section class="py-12 bg-gray-50">
                  <div class="px-4 mx-auto max-w-7xl">
                      <h2 class="mb-8 text-4xl font-bold text-center text-orange-600">Sobre Nosotros</h2>
                      <p class="p-2 mb-6 text-lg text-center text-gray-700 bg-white rounded-md">
                          Nuestro objetivo es informar y ayudar a las personas a evitar caer en los mismos errores que otros han enfrentado. A través de historias reales y consejos prácticos, buscamos empoderarte para que reconozcas las señales de advertencia y protejas tus finanzas y bienestar emocional.
                      </p>

                      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                          <!-- Tarjeta 1 -->
                          <div class="p-6 bg-white rounded-lg shadow-lg" data-aos="fade-right">
                              <h3 class="mb-2 text-xl font-semibold text-orange-800">Nuestra Misión</h3>
                              <p class="text-gray-600">
                                  Brindar recursos y apoyo a quienes han sido afectados por relaciones tóxicas, promoviendo la conciencia y la educación sobre las tácticas manipuladoras.
                              </p>
                          </div>

                          <!-- Tarjeta 2 -->
                          <div class="p-6 bg-white rounded-lg shadow-lg" data-aos="fade-left">
                              <h3 class="mb-2 text-xl font-semibold text-orange-800">Nuestra Visión</h3>
                              <p class="text-gray-600">
                                  Un mundo donde todos tengan acceso a la información necesaria para protegerse y tomar decisiones informadas en sus relaciones personales.
                              </p>
                          </div>

                          <!-- Tarjeta 3 -->
                          <div class="p-6 bg-white rounded-lg shadow-lg" data-aos="fade-right">
                              <h3 class="mb-2 text-xl font-semibold text-orange-800">Nuestros Valores</h3>
                              <p class="text-gray-600">
                                  Honestidad, integridad y empatía son los pilares de nuestra comunidad. Creemos que compartir experiencias puede transformar vidas y ayudar a otros a sanar.
                              </p>
                          </div>

                          <!-- Tarjeta 4 -->
                          <div class="p-6 bg-white rounded-lg shadow-lg" data-aos="fade-left">
                              <h3 class="mb-2 text-xl font-semibold text-orange-800">Educación Financiera</h3>
                              <p class="text-gray-600">
                                  Fomentamos la educación financiera para que las personas comprendan mejor cómo manejar su dinero y evitar situaciones riesgosas.
                              </p>
                          </div>



                          <!-- Tarjeta 6 -->
                          <div class="p-6 bg-white rounded-lg shadow-lg" data-aos="fade-left">
                              <h3 class="mb-2 text-xl font-semibold text-orange-800">Historias Reales</h3>
                              <p class="text-gray-600">
                                  Compartimos historias de personas que han enfrentado situaciones difíciles, con el fin de crear conciencia y prevención.
                              </p>
                          </div>

                          <!-- Tarjeta 7 -->

                          <!-- Tarjeta 8 -->
                          <div class="p-6 bg-white rounded-lg shadow-lg" data-aos="fade-left">
                              <h3 class="mb-2 text-xl font-semibold text-orange-800">Talleres y Eventos</h3>
                              <p class="text-gray-600">
                                  Organizamos talleres y eventos para fomentar el aprendizaje y la discusión sobre relaciones sanas y manejo de finanzas.
                              </p>
                          </div>

                          <!-- Tarjeta 9 -->
                          <div class="p-6 bg-white rounded-lg shadow-lg" data-aos="fade-right">
                              <h3 class="mb-2 text-xl font-semibold text-orange-800">Información sobre tácticas manipuladoras</h3>
                              <p class="text-gray-600">
                                Un común denominador de las relaciónes de parejas que acabaron mal, es que todas empezaron con palabras dulces, promesas y "amor", buscamos ayudarte a reconocer cuando es real y cuando hay intenciones malas.
                              </p>
                          </div>

                          <!-- Tarjeta 10 -->
                          <div class="p-6 bg-white rounded-lg shadow-lg" data-aos="fade-left">
                              <h3 class="mb-2 text-xl font-semibold text-orange-800">Prevención de Fraude</h3>
                              <p class="text-gray-600">
                                  Proporcionamos información y recursos sobre cómo identificar y prevenir fraudes en relaciones personales y financieras.
                              </p>
                          </div>
                      </div>
                  </div>
              </section>
          </template>
      </MainLayout>
  </div>
</template>

<script lang="ts" setup>
import MainLayout from '../layouts/MainLayout.vue';
</script>

<style scoped>
</style>
