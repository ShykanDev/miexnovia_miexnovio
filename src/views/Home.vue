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
        <div class="py-3 pt-10 slider">
          <div class="gap-2 slide-track">
            <CommentExampleCard nameAge="Lucas" title="El amor se disfrazó de interés, y perdí más que mi corazón."
              :img="h1Image" />
            <CommentExampleCard nameAge="Danilo"
              title="La amé con todo mi ser, pero ella solo buscaba lo que podía ofrecerle." :img="h2Image" />
            <CommentExampleCard nameAge="Fernando"
              title="Desgasté mi corazón y mi cuenta bancaria por un amor que nunca existió." :img="h3Image" />
            <CommentExampleCard nameAge="Oscar"
              title="Su sonrisa me cautivó, pero su corazón solo tenía espacio para el dinero." :img="h4Image" />
            <CommentExampleCard nameAge="Karla" title="Soñé con un futuro juntos, pero él solo quería mi dinero."
              :img="m0Image" />
            <CommentExampleCard nameAge="Daniela"
              title="Creí en su cuento de hadas, pero al final solo había un castillo de deudas." :img="m1Image" />
            <CommentExampleCard nameAge="Jessica" title="Me entregué a un amor falso y perdí mi hogar en el proceso."
              :img="m2Image" />
            <CommentExampleCard nameAge="Camila"
              title="Un romance de verano que se convirtió en una pesadilla financiera." :img="m3Image" />

          </div>
        </div>

        <div class="flex justify-around w-full pt-6 text-center bg-white lg:pt-16">

          <div>
            <h3 class="mb-5 text-3xl font-medium px-7 text-sky-950">
              <span class="text-white bg-emerald-800">
                Comparte, descubre y aprende</span>
               de las experiencias de otros en relaciones amorosas que dejaron profundas
              cicatrices.
            </h3>
            <h3 class="mb-3 text-sky-900">
              Descubre cómo relaciones pasadas
              dejaron a muchos en problemas, desde
              <strong class="">
                pérdidas financieras</strong>
                hasta
                <strong class="">
                  traumas emocionales.
                </strong>
                
            </h3>
            <h3 class="mb-3 text-sky-800">
              Conoce cómo algunas parejas utilizan el amor como herramienta para
              <strong>estafar y manipular</strong>, dejando tras de sí deudas, fraudes y secuelas emocionales.
            </h3>
            <h3 class="mb-3 text-sky-800">
              <strong class="text-white bg-sky-800">Comparte tus propias experiencias con los demás</strong> y ayuda a otros a prevenir relaciones que pueden traer
              consecuencias graves.
            </h3>
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

            <h3 class="mb-4 text-2xl font-bold text-center text-gray-900">
              Conoce las señales y protege tu bienestar ante relaciones que causan más daño que amor.
            </h3>

            <div data-aos="fade-right" class="grid gap-8 mb-8 md:grid-cols-2">
              <div class="overflow-hidden bg-white rounded-lg shadow-lg">
                <img src="../assets/img/alerta.jpg"
                  alt="Advertencia Financiera" class="object-cover w-full ">
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
                      Emergencias financieras que no se explican.
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
                    <li class="flex items-center">
  <span class="mr-2 text-green-500">✓</span>
  Crear un presupuesto y discutir metas financieras en pareja.
</li>
<li class="flex items-center">
  <span class="mr-2 text-green-500">✓</span>
  Limitar el acceso a tus cuentas bancarias y financieras.
</li>
<li class="flex items-center">
  <span class="mr-2 text-green-500">✓</span>
  Revisar el historial de deudas de la pareja antes de comprometerte.
</li>
<li class="flex items-center">
  <span class="mr-2 text-green-500">✓</span>
  No compartir información de acceso a tus cuentas en línea.
</li>
<li class="flex items-center">
  <span class="mr-2 text-green-500">✓</span>
  Asegurarte de que los préstamos a nombre de ambos estén en control.
</li>
<li class="flex items-center">
  <span class="mr-2 text-green-500">✓</span>
  Definir acuerdos claros sobre gastos compartidos y ahorros.
</li>
<li class="flex items-center">
  <span class="mr-2 text-green-500">✓</span>
  Priorizar tu seguridad financiera en caso de problemas en la relación.
</li>
<li class="flex items-center">
  <span class="mr-2 text-green-500">✓</span>
  Consultar a un asesor financiero para una segunda opinión.
</li>
<li class="flex items-center">
  <span class="mr-2 text-green-500">✓</span>
  Mantener una copia de seguridad de todos los documentos financieros.
</li>

                  </ul>
                </div>
              </div>
            </div>

            <div class="p-6 bg-white rounded-lg shadow-lg">
              <h2 class="mb-4 text-2xl font-bold text-gray-900">Consejos de Protección Legal</h2>
              <h4>Toma estos consejos en base a las historias de nuestros usuarios</h4>
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
              <h3 class="mb-4 text-xl font-semibold text-sky-950">
                Te invitamos a compartir tus experiencias y a dejar un comentario para ayudar a otros a reconocer las
                señales de alerta en sus relaciones.

              </h3>
              <div class="flex justify-center">
                <img class="w-[600px] rounded-md " src="../assets/img/comentandoLanscape.jpg" alt="">
              </div>
            </div>

            <div class="">
              <router-link :to="{ name: 'comments' }" class="px-4 py-2 mt-3 text-white rounded-md bg-sky-800">
                Ir a comentarios
              </router-link>
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
import ComentsSlider from '../components/comentsSlider/ComentsSlider.vue';
import CommentExampleCard from '../components/commentExample/commentExampleCard.vue';
let showImgMen = ref(false);
let showImgWomen = ref(true);


// images
import h1Image from '../assets/img/h1.jpg';
import h2Image from '../assets/img/h2.jpg';
import h3Image from '../assets/img/h3.jpg';
import h4Image from '../assets/img/h4.jpg';
import m0Image from '../assets/img/m0.jpg';
import m1Image from '../assets/img/m1.jpg';
import m2Image from '../assets/img/m2.jpg';
import m3Image from '../assets/img/m3.jpg';
import m4Image from '../assets/img/m4.jpg';



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

<style scoped lang="scss">
@mixin white-gradient {
  background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 100%);
}

$animationSpeed: 40s;

// Animation
@keyframes scroll {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(calc(-250px * 7))
  }
}


// Styling
.slider {
  background: white;
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, .125);
  // min-height: 10px;
  margin: auto;
  overflow: hidden;
  position: relative;
  width: 100dvw;

  &::before,
  &::after {
    @include white-gradient;
    content: "";
    height: 100px;
    position: absolute;
    width: 200px;
    z-index: 2;
  }

  &::after {
    right: 0;
    top: 0;
    transform: rotateZ(180deg);
  }

  &::before {
    left: 0;
    top: 0;
  }

  .slide-track {

    animation: scroll $animationSpeed linear infinite;
    display: flex;

    width: calc(250px * 14);
  }

  .slide {
    height: 100px;
    width: 250px;

  }
}
</style>
