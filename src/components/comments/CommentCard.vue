<template>
    <div>
        <div class="p-4 mx-auto mb-4 bg-white border border-gray-200 rounded-lg shadow-md ">

            <div class="flex items-center gap-1">
                <v-icon name="fa-user-alt" class="text-sky-800" />
                <p class="mb-1 text-base font-semibold text-gray-800">{{ name }}</p>
            </div>
            <!-- Name and Age -->
            <p class="mb-1 text-xs font-semibold text-gray-800">{{ age }}</p>

            <!-- Comment Title -->
            <p class="mb-2 text-gray-800 -semibold text">
                "{{ title }}"
            </p>

            <!-- Comment Content -->
            <p class="mb-4 text-sm text-gray-800">
                "{{ content }}"
            </p>

            <!-- Reply Button -->
            <div class="flex justify-center gap-1 px-3 py-1 text-white rounded-lg bg-sky-800 min-w-24 max-w-32">
                <button 
                    @click="toggleReply" 
                    class="text-sm font-semibold hover:underline focus:outline-none">
                    Responder
                </button>
                <v-icon name="bi-pencil-fill" class="text-white" />
            </div>

            <!-- Reply List -->
             <p>{{ responses.respuestas }}</p>


            <!-- Reply Input (Textarea) -->
            <div v-if="showReply" class="mt-4">
                <textarea 
                    v-model="replyContent" 
                    placeholder="Escribe tu respuesta aquí..." 
                    class="w-full p-2 border rounded-md" 
                    rows="3"
                ></textarea>
                <button 
                    @click="submitReply"
                    class="px-4 py-2 mt-2 text-white rounded-lg bg-sky-600">
                    Responder
                </button>
            </div>

            <!-- Date -->
            <div class="flex items-center justify-end gap-1">
                <v-icon name="io-calendar" class="text-sky-800" />
                <!-- fecha de timestamp a date -->
                <!-- <p class="mb-1 text-xs text-gray-500 text-end">Publicado el {{ date.slice(0,10) }}</p> -->
            </div>

        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const props = defineProps({
  name: String,
  age: Number,
  title: String,
  content: String,
  date: String,
  commentId: String,  // ID del comentario
  submitReply: Function,  // Recibe la función para agregar respuestas
  responses: Array
});


// Estado para manejar la visibilidad del textarea
const showReply = ref(false);
const replyContent = ref('');

// Función para alternar la visibilidad del campo de respuesta
const toggleReply = () => {
    showReply.value = !showReply.value;
};

// Función para enviar la respuesta
const submitReply = () => {
  if (replyContent.value) {
    // Llamar a la función del padre para agregar la respuesta
    props.submitReply(props.commentId, replyContent.value, props.name);  // Cambiar 'name.value' por 'props.name'
    replyContent.value = ''; // Limpiar el campo de respuesta
    showReply.value = false; // Cerrar el textarea
  }
};

</script>

<style scoped>
/* Puedes agregar estilos si es necesario */
</style>