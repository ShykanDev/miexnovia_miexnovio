<template>
    <MainLayout>
        <template #main>
            <h2 class="mt-10 mb-5 text-3xl font-bold text-center text-orange-600 font-poppins">Comentarios de Usuarios</h2>
            

            <div class="flex justify-center w-full mt-10 font-poppins">
                <!-- Sección de comentarios -->
                <section class="flex flex-wrap w-full justify-evenly">
                    <CommentCard/>
                    <CommentCard/>
                    <CommentCard/>
                    <CommentCard/>
                    <CommentCard/>
                    <CommentCard/>
                </section>
            </div>
            <div class="flex flex-col items-center w-full p-4">
                <div class="w-full px-4 py-6 bg-white rounded-lg shadow-lg">
                    <h2 class="mb-4 text-xl font-bold text-center text-sky-800">Agregar un Comentario</h2>
                    <form @submit.prevent="" class="space-y-6">
                        <!-- Campo de Título del Comentario -->
                        <div>
                            <label for="commentTitle" class="block text-sm font-medium text-gray-700">Título del Comentario</label>
                            <input type="text" id="commentTitle" placeholder="Mi novia me estafó con $10000"
                                   class="block w-full px-4 py-3 mt-1 transition duration-200 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                                   required>
                        </div>

                        <!-- Campo de Contenido del Comentario -->
                        <div>
                            <label for="commentContent" class="block text-sm font-medium text-gray-700">Comentario</label>
                            <textarea  id="commentContent" rows="4" placeholder="Escribe tu comentario aquí..."
                                      class="block w-full px-4 py-3 mt-1 transition duration-200 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                                      required></textarea>
                        </div>

                        <!-- Botón para Comentar -->
                        <div>
                            <button type="submit"
                                    class="w-full px-4 py-2 font-semibold text-white transition duration-300 rounded-lg bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50">
                                Comentar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </template>
    </MainLayout>
</template>

<script lang="ts" setup>
import CommentCard from '../components/comments/CommentCard.vue';
import MainLayout from '../layouts/MainLayout.vue';
</script>

<style scoped>
/* Estilos adicionales para mejorar la apariencia */
h2 {
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

button {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

button:hover {
    transform: translateY(-2px);
}

input, textarea {
    transition: all 0.2s ease;
}

input:focus, textarea:focus {
    box-shadow: 0 0 5px rgba(0, 128, 255, 0.5);
}
</style>
