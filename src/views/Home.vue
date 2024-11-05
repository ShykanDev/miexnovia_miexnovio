<template>
  <div class="">
    <MainLayout>
      <template #main>

        <!-- <div class="relative flex flex-col items-center justify-center w-full gap-2 text-white min-h-min h-dvh"> -->
        <article
          class="fixed top-0 bottom-0 flex flex-col items-center text-center justify-center text-2xl w-full h-[800px] overflow-hidden space-y-28 -z-10 bg-black bg-opacity-25">



        </article>
        <!-- <img :class="{ 'opacity-100': showImgWomen, 'opacity-0': !showImgWomen }"
          class="fixed top-0 bottom-0 h-[800px] -z-20" src="../assets/img/mujerMain.jpg" alt=""> -->


        <!-- </div> -->
        <div class="flex justify-around w-full text-center bg-white lg:pt-16">
          
          <div>
            <h3 class="text-3xl">Comparte, conoce y aprende de las experiencias de otros</h3>
            <h3 class="mb-3">Conoce sobre como las relaciones pasadas, 
              <strong>
                dejaron en problemas 
              </strong>
              a muchos</h3>
            <h3 class="mb-3">Conoce como las parejas, tienden a estafar dejando 
              <strong>
                en problemas, económicos, fraudes, abuso emocional
              </strong>
               entre muchos problemas más.</h3>
            <h3>
              <strong>
                Comparte tus experiencias
              </strong>
              , con tus relaciones que te dejaron en problemas</h3>
          </div>
            <img class="rounded-md" src="../assets/img/husbandFight.webp" alt="">
        </div>
        <div class="relative w-dvw">
        </div>
        <!-- <div class="relative flex flex-col items-center justify-center w-full gap-2 text-white min-h-min h-dvh"> -->
         <!-- <video src="../assets/img/HusbandCompress.mp4"  autoplay loop></video> -->
        <!-- </div> -->
        <!-- <div class="relative flex flex-col items-center justify-center w-full gap-2 text-white min-h-min h-dvh">
          <article
            class="fixed top-0 bottom-0 flex flex-col items-center text-center justify-center text-xl md:text-2xl w-full h-[800px] lg:h-dvh overflow-hidden space-y-14 lg:space-y-0 lg:justify-around lg:items-center lg:pt-7 -z-10 bg-black bg-opacity-25">

            <p class="w-3/4 text-3xl text-center animate-fade-left lg:text-3xl">
              ¿Tu ex te dejó en problemas? Ayuda a otros a no caer en la misma trampa
            </p>

            <p class="w-3/4 text-center animate-fade-right animate-delay-300 lg:text-3xl">
              Comparte tus experiencias con otros
            </p>
            <RouterLink :to="{ name: 'comments' }"
              class="px-4 py-2 font-medium text-white rounded-full bg-sky-700 hover:bg-sky-800 animate-fade-right animate-delay-500">
              Ver comentarios
            </RouterLink>

            <p class="w-3/4 text-center animate-fade-left animate-delay-600 lg:text-3xl lg:animate-delay-700">
              Conoce las experiencias de otros, y aprende a protegerte
            </p>

          </article>

          <img :class="{ 'opacity-100': showImgWomen, 'opacity-0': !showImgWomen }"
            class="fixed top-0 transition-opacity ease-in-out duration-700 left-0 right-0 bottom-0 h-[800px] -z-20 md:hidden lg:hidden w-full"
            src="../assets/img/mujerMain.jpg" alt="">
          <img :class="{ 'opacity-100': showImgMen, 'opacity-0': !showImgMen }"
            class="w-full fixed md:hidden lg:hidden top-0 transition-opacity ease-in-out duration-700 left-0 right-0 bottom-0 h-[800px] -z-20"
            src="../assets/img/hombreMainM.jpg" alt="">
          <img :class="{ 'opacity-100': showImgMen, 'opacity-0': !showImgMen }"
            class="fixed top-0 transition-opacity ease-in-out duration-700 left-0 right-0 bottom-0 h-[800px] -z-20 lg:w-full hidden md:block md:fixed lg:fixed"
            src="../assets/img/coupleHappyL01.jpg" alt="">

          <img :class="{ 'opacity-100': !showImgMen, 'opacity-0': showImgMen }"
            class="fixed top-0 transition-opacity ease-in-out duration-700 left-0 right-0 bottom-0 h-[800px] -z-20 lg:w-full hidden md:block md:fixed lg:fixed"
            src="../assets/img/coupleSadL002.jpg" alt="">
        </div> -->

        <section class="z-20 bg-white">

          <div class="px-4 py-8 mx-auto max-w-7xl">
            <div class="mb-12 text-center">
              <h1 class="mb-4 text-4xl font-bold text-gray-900"> ¿Alguna vez has tenido una expareja que te dejó en
                problemas?</h1>
              <p class="text-xl text-gray-600">
                En esta página exploraremos cómo algunas exparejas, ya sean hombres o mujeres, a menudo emplean tácticas
                manipuladoras que pueden llevar a problemas serios, como deudas, fraudes financieros y situaciones de
                abuso emocional. A través de historias reales, aprenderás a reconocer señales de advertencia y cómo
                protegerte de estos comportamientos dañinos que pueden afectar tu estabilidad financiera y emocional.
              </p>
            </div>
            <div class="p-8 space-y-6 bg-slate-50">
              <figure class="p-8 md:flex bg-slate-100 rounded-xl md:p-0 ">
                <img class="w-24 h-24 mx-auto rounded-full md:w-48 md:h-auto md:rounded-none" src="../assets/img/m1.jpg"
                  alt="Perfil de persona estafada" width="384" height="512">
                <div class="pt-6 space-y-4 text-center md:p-8 md:text-left">
                  <blockquote>
                    <p class="text-lg font-medium">
                      “Mi exnovio me convenció de invertir en un negocio que nunca existió. Durante meses, me decía que
                      todo iba bien mientras gastaba el dinero en sus placeres. Cuando me di cuenta de la verdad, ya
                      había perdido más de $30,000.”
                    </p>
                  </blockquote>
                  <figcaption class="font-medium">
                    <div class="text-sky-500 dark:text-sky-400">Laura G.</div>
                  </figcaption>
                </div>
              </figure>

              <figure class="p-8 md:flex bg-slate-100 rounded-xl md:p-0 ">
                <img class="w-24 h-24 mx-auto rounded-full md:w-48 md:h-auto md:rounded-none" src="../assets/img/h1.jpg"
                  alt="Perfil de persona estafada" width="384" height="512">
                <div class="pt-6 space-y-4 text-center md:p-8 md:text-left">
                  <blockquote>
                    <p class="text-lg font-medium">
                      “Después de nuestra ruptura, mi exnovia comenzó a usar mis datos para pedir préstamos. Me enteré
                      cuando empecé a recibir llamadas de cobradores. Fue devastador ver cómo alguien que amaba me
                      traicionó de esa manera.”
                    </p>
                  </blockquote>
                  <figcaption class="font-medium">
                    <div class="text-sky-500 dark:text-sky-400">David M.</div>
                  </figcaption>
                </div>
              </figure>

              <figure class="p-8 md:flex bg-slate-100 rounded-xl md:p-0 ">
                <img class="w-24 h-24 mx-auto rounded-full md:w-48 md:h-auto md:rounded-none" src="../assets/img/m0.jpg"
                  alt="Perfil de persona estafada" width="384" height="512">
                <div class="pt-6 space-y-4 text-center md:p-8 md:text-left">
                  <blockquote>
                    <p class="text-lg font-medium">
                      “Mi pareja me hizo creer que necesitaba un préstamo para ayudar a su familia. Confié en ella y
                      terminé dándole mis ahorros. Resulta que todo era una mentira; nunca hubo una emergencia, solo
                      estaba aprovechándose de mí.”
                    </p>
                  </blockquote>
                  <figcaption class="font-medium">
                    <div class="text-sky-500 dark:text-sky-400">Sofía R.</div>
                  </figcaption>
                </div>
              </figure>

              <figure class="p-8 md:flex bg-slate-100 rounded-xl md:p-0 ">
                <img class="w-24 h-24 mx-auto rounded-full md:w-48 md:h-auto md:rounded-none" src="../assets/img/h2.jpg"
                  alt="Perfil de persona estafada" width="384" height="512">
                <div class="pt-6 space-y-4 text-center md:p-8 md:text-left">
                  <blockquote>
                    <p class="text-lg font-medium">
                      “Mi ex me convenció de comprar un coche a su nombre, prometiendo que lo pagaríamos juntos. Cuando
                      rompimos, se quedó con el coche y los pagos cayeron sobre mí. Pasé meses tratando de resolver la
                      situación.”
                    </p>
                  </blockquote>
                  <figcaption class="font-medium">
                    <div class="text-sky-500 dark:text-sky-400">Fernando T.</div>
                  </figcaption>
                </div>
              </figure>

              <figure class="p-8 md:flex bg-slate-100 rounded-xl md:p-0 ">
                <img class="w-24 h-24 mx-auto rounded-full md:w-48 md:h-auto md:rounded-none" src="../assets/img/m4.jpg"
                  alt="Perfil de persona estafada" width="384" height="512">
                <div class="pt-6 space-y-4 text-center md:p-8 md:text-left">
                  <blockquote>
                    <p class="text-lg font-medium">
                      “Me enamoré de un chico que parecía perfecto. Me pidió que le prestara dinero para invertir en un
                      negocio, prometiendo altos retornos. Después de un tiempo, desapareció sin dejar rastro,
                      llevándose mis ahorros.”
                    </p>
                  </blockquote>
                  <figcaption class="font-medium">
                    <div class="text-sky-500 dark:text-sky-400">Carla B.</div>
                  </figcaption>
                </div>
              </figure>
              <figure class="p-8 md:flex bg-slate-100 rounded-xl md:p-0 ">
                <img class="w-24 h-24 mx-auto rounded-full md:w-48 md:h-auto md:rounded-none"
                  src="../assets/img/hombre00.jpg" alt="Perfil de persona estafada" width="384" height="512">
                <div class="pt-6 space-y-4 text-center md:p-8 md:text-left">
                  <blockquote>
                    <p class="text-lg font-medium">
                      “Mi exnovia se hizo pasar por enferma para que le ayudara con gastos médicos. Creí en su historia
                      y le presté dinero, solo para descubrir que era un engaño. Me sentí traicionada y tonta por no
                      darme cuenta antes.”
                    </p>
                  </blockquote>
                  <figcaption class="font-medium">
                    <div class="text-sky-500 dark:text-sky-400">Daniel J.</div>
                  </figcaption>
                </div>
              </figure>

              <figure class="p-8 md:flex bg-slate-100 rounded-xl md:p-0 ">
                <img class="w-24 h-24 mx-auto rounded-full md:w-48 md:h-auto md:rounded-none" src="../assets/img/h4.jpg"
                  alt="Perfil de persona estafada" width="384" height="512">
                <div class="pt-6 space-y-4 text-center md:p-8 md:text-left">
                  <blockquote>
                    <p class="text-lg font-medium">
                      “Estaba muy enamorado y decidí ayudar a mi ex a pagar sus deudas. Resulta que había estado
                      mintiendo sobre su situación financiera y solo usó mi dinero para salir con otras personas. Fue
                      devastador darme cuenta de la verdad.”
                    </p>
                  </blockquote>
                  <figcaption class="font-medium">
                    <div class="text-sky-500 dark:text-sky-400">Luis F.</div>
                  </figcaption>
                </div>
              </figure>

              <figure class="p-8 md:flex bg-slate-100 rounded-xl md:p-0 ">
                <img class="w-24 h-24 mx-auto rounded-full md:w-48 md:h-auto md:rounded-none" src="../assets/img/m2.jpg"
                  alt="Perfil de persona estafada" width="384" height="512">
                <div class="pt-6 space-y-4 text-center md:p-8 md:text-left">
                  <blockquote>
                    <p class="text-lg font-medium">
                      “Creí que estaba en una relación seria, pero mi ex se aprovechó de mi confianza. Me pidió que le
                      prestara dinero para un viaje de trabajo, y después de eso desapareció sin pagarme ni una sola
                      moneda. Me dejó con una gran deuda.”
                    </p>
                  </blockquote>
                  <figcaption class="font-medium">
                    <div class="text-sky-500 dark:text-sky-400">Claudia S.</div>
                  </figcaption>
                </div>
              </figure>
              <div class="flex justify-center mt-8">
                <RouterLink :to="{ name: 'comments' }" class="px-4 py-2 text-sm font-semibold text-white transition duration-300 ease-in-out rounded-lg shadow-md bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50 sm:text-base">
                  Deja tu comentario
                </RouterLink>
              </div>
            </div>

            <div data-aos="fade-right" class="grid gap-8 mb-8 md:grid-cols-2">
              <div class="overflow-hidden bg-white rounded-lg shadow-lg">
                <img src="https://images.unsplash.com/photo-1621252179027-94459d278660?w=800"
                  alt="Advertencia Financiera" class="object-cover w-full h-48">
                <div class="p-6">
                  <h2 class="mb-4 text-2xl font-bold text-gray-900">Señales Comunes de Advertencia</h2>
                  <ul class="space-y-3 text-gray-700">
                    <li class="flex items-center">
                      <span class="mr-2 text-red-500">⚠️</span>
                      Pedir ayuda financiera desde el inicio.
                    </li>
                    <li class="flex items-center">
                      <span class="mr-2 text-red-500">⚠️</span>
                      "Bombardeo de amor" seguido de demandas financieras.
                    </li>
                    <li class="flex items-center">
                      <span class="mr-2 text-red-500">⚠️</span>
                      Presión para compartir cuentas financieras.
                    </li>
                    <li class="flex items-center">
                      <span class="mr-2 text-red-500">⚠️</span>
                      Emergencias financieras misteriosas que no se explican.
                    </li>
                    <li class="flex items-center">
                      <span class="mr-2 text-red-500">⚠️</span>
                      Deudas ocultas o problemas financieros que se ocultan.
                    </li>
                    <li class="flex items-center">
                      <span class="mr-2 text-red-500">⚠️</span>
                      Reticencia a hablar abiertamente sobre finanzas.
                    </li>
                    <li class="flex items-center">
                      <span class="mr-2 text-red-500">⚠️</span>
                      Comportamientos celosos o controladores que afectan tu libertad.
                    </li>
                  </ul>
                </div>
              </div>

              <div data-aos="fade-left" class="overflow-hidden bg-white rounded-lg shadow-lg">
                <img src="../assets/img/stopMain.jpg" alt="Consejos de Protección" class="object-cover w-full h-48">
                <div class="p-6">
                  <h2 class="mb-4 text-2xl font-bold text-gray-900">Cómo Protegerse</h2>
                  <ul class="space-y-3 text-gray-700">
                    <li class="flex items-center">
                      <span class="mr-2 text-green-500">✓</span>
                      Mantener cuentas financieras separadas y privadas.
                    </li>
                    <li class="flex items-center">
                      <span class="mr-2 text-green-500">✓</span>
                      Documentar todas las transacciones y mantener registros claros.
                    </li>
                    <li class="flex items-center">
                      <span class="mr-2 text-green-500">✓</span>
                      Monitorear tus reportes de crédito regularmente.
                    </li>
                    <li class="flex items-center">
                      <span class="mr-2 text-green-500">✓</span>
                      Establecer límites financieros claros desde el principio.
                    </li>
                    <li class="flex items-center">
                      <span class="mr-2 text-green-500">✓</span>
                      Investigar antecedentes financieros de tu pareja.
                    </li>
                    <li class="flex items-center">
                      <span class="mr-2 text-green-500">✓</span>
                      Confiar en tus instintos y buscar ayuda si es necesario.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="p-6 bg-white rounded-lg shadow-lg">
              <h2 class="mb-4 text-2xl font-bold text-gray-900">Consejos de Protección Legal</h2>
              <div class="grid gap-6 md:grid-cols-3">
                <div data-aos="fade-right" class="p-4 rounded-lg bg-blue-50">
                  <h3 class="mb-2 font-bold text-blue-800">Documentación</h3>
                  <ul class="pl-4 space-y-2 text-gray-700 list-disc">
                    <li>Guardar registros de todas las transacciones y conversaciones.</li>
                    <li>Registrar cualquier mensaje o comportamiento amenazante.</li>
                    <li>Documentar patrones de comportamiento inusuales o abusivos.</li>
                    <li>Mantener estados financieros actualizados y organizados.</li>
                  </ul>
                </div>
                <div data-aos="fade-right" class="p-4 rounded-lg bg-blue-50">
                  <h3 class="mb-2 font-bold text-blue-800">Medidas Legales</h3>
                  <ul class="pl-4 space-y-2 text-gray-700 list-disc">
                    <li>Considerar órdenes de restricción si es necesario.</li>
                    <li>Consultar con asesores financieros o abogados.</li>
                    <li>Reportar cualquier intento de fraude o estafa a las autoridades.</li>
                    <li>Buscar asesoría legal lo antes posible para proteger tus derechos.</li>
                  </ul>
                </div>
                <div data-aos="fade-right" class="p-4 rounded-lg bg-blue-50">
                  <h3 class="mb-2 font-bold text-blue-800">Prevención</h3>
                  <ul class="pl-4 space-y-2 text-gray-700 list-disc">
                    <li>Usar acuerdos prenupciales si se decide avanzar en una relación seria.</li>
                    <li>Mantener bienes y cuentas financieras separados, incluso en pareja.</li>
                    <li>Configurar la privacidad en cuentas compartidas o conjuntas.</li>
                    <li>Realizar revisiones de seguridad y privacidad regularmente.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="mt-8 text-center">
              <h2 class="mb-4 text-3xl font-bold text-gray-900">Aprende de las experiencias de otros</h2>
              <p class="mb-6 text-gray-600">Nuestro objetivo es ayudarte a entender cómo es que la mente de algunas
                personas es capaz de manipular a sus parejas, para llevarlos a problemas de un nivel muy alto. </p>

            </div>
           
            <h3 class="mt-6 text-2xl font-bold text-center text-sky-900 font-poppins">Te puede interesar...</h3>
            <section class="flex justify-center w-full my-6 space-x-4"> <!-- ads section -->
              <div
                class="relative flex items-center justify-center w-1/2 p-4 border-2 rounded-lg shadow-md border-slate-400 bg-slate-100">
                <span
                  class="absolute px-2 py-1 text-sm font-semibold text-white rounded -top-4 left-4 bg-slate-500">Anuncio</span>
                <a href="https://miarrendador.com/index.php" class="relative w-full h-full" target="_blank"
                  rel="noopener noreferrer">
                  <div
                    class="absolute flex flex-col items-center w-full h-full transition-opacity duration-300 ease-out bg-black opacity-0 hover:opacity-70 justify-evenly">
                    <p class="text-xs font-bold text-center text-white font-poppins md:text-3xl"></p>
                    <p class="text-sm font-bold text-center text-white font-poppins md:text-3xl">Te guiamos a la mejor
                      toma de decisiones al rentar un inmueble</p>
                  </div>
                  <img class="w-full h-full bg-contain rounded-md" src="../assets/img/lendAd.jpg" alt="">
                  <p class="absolute text-xs font-bold text-center text-slate-800 top-1 font-poppins md:text-3xl">
                    ¿Necesitas un arrendatario?</p>
                  <p class="absolute text-xs font-bold text-center text-slate-800 bottom-1 font-poppins md:text-3xl">
                    ¿Eres un arrendador?</p>
                </a>
              </div>

              <div
                class="relative flex items-center justify-center w-1/2 p-4 border-2 rounded-lg shadow-md border-slate-400 bg-slate-100">
                <span
                  class="absolute px-2 py-1 text-sm font-semibold text-white rounded -top-4 left-4 bg-slate-500">Anuncio</span>
                <a href="https://chyawanprash.com.mx/index.html" class="relative w-full h-full" target="_blank"
                  rel="noopener noreferrer">
                  <div
                    class="absolute flex flex-col items-center w-full h-full transition-opacity duration-300 ease-out bg-black opacity-0 hover:opacity-70 justify-evenly">
                    <p class="text-sm font-bold text-center text-white font-poppins md:text-3xl">Usala con tu alimentos
                      favoritos</p>
                    <p class="text-sm font-bold text-center text-white font-poppins md:text-3xl">Multivitaminico</p>
                    <p class="hidden text-sm font-bold text-center text-white font-poppins md:text-3xl md:block">100%
                      natural</p>
                  </div>
                  <img class="w-full h-full bg-contain rounded-md" src="../assets/img/cyanAd.png" alt="">
                  <p class="absolute top-0 text-xs font-bold text-center text-white font-poppins md:text-3xl">Mermelada
                    oscura</p>
                  <p
                    class="absolute px-3 text-xs font-bold text-center text-white md:px-0 bottom-3 font-poppins md:text-3xl">
                    Rejuvenecedor</p>
                </a>
              </div>
            </section>


          </div>
        </section>
      </template>
    </MainLayout>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import MainLayout from '../layouts/MainLayout.vue';
import { onMounted, onUnmounted, ref } from 'vue';
let showImgMen = ref(false);
let showImgWomen = ref(true);

const toggleImages = () => {
  showImgMen.value = !showImgMen.value;
  showImgWomen.value = !showImgWomen.value;
};

let interval;
onMounted(() => {
  interval = setInterval(() => {
    toggleImages();
  }, 2000)
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>

<style scoped></style>
