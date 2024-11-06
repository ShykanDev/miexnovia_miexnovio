<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { getFirestore, collection, addDoc, onSnapshot, query, orderBy, doc, updateDoc } from "firebase/firestore";
import CommentCard from '../components/comments/CommentCard.vue';
import MainLayout from '../layouts/MainLayout.vue';

// Campos reactivos para el formulario
const name = ref('');
const age = ref(0);
const titulo = ref('');
const contenido = ref('');

// Array reactivo para los comentarios
const comments = ref([]);
let responsesExtracted 
// Obtener los comentarios desde Firestore
const db = getFirestore();
const cargarComentarios = () => {
  const q = query(collection(db, "comments"), orderBy('fecha', 'desc'));

  onSnapshot(q, (querySnapshot) => {
    // querySnapshot.forEach((doc) => {
    //   console.log('Comentario:', doc.data());
    // })
    comments.value = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      respuesta: ''       
    }));
  });
        
};

// Función para agregar un comentario
const agregarComentario = async () => {
  if (titulo.value && contenido.value) {
    try {
      const comentariosRef = collection(db, "comments");
      await addDoc(comentariosRef, {
        titulo: titulo.value,
        contenido: contenido.value,
        fecha: new Date(),
        nombre: name.value,
        edad: age.value,
        respuestas: [] // Campo para las respuestas
      });
      // Limpiar el formulario
      titulo.value = '';
      contenido.value = '';
      age.value = null;
      name.value = '';
      alert('Comentario agregado correctamente');
    } catch (error) {
      console.error('Error al agregar el comentario:', error);
      alert('Hubo un error al agregar el comentario');
    }
  }
};

// Función para agregar una respuesta
// Función para agregar una respuesta
const agregarRespuesta = async (commentId: string, respuesta: string, nombre: string) => {
  if (respuesta) {
    try {
      const commentRef = doc(db, "comments", commentId);
      const comment = comments.value.find(c => c.id === commentId);
      
      // Actualizar Firestore
      await updateDoc(commentRef, {
        respuestas: [...(comment?.respuestas || []), {
          contenido: respuesta,
          nombre: nombre,
          fecha: new Date()
        }]
      });

      // Actualizar el comentario localmente
      if (comment) {
        comment.respuestas.push({
          contenido: respuesta,
          nombre: nombre,
          fecha: new Date()
        });
      }

      alert('Respuesta agregada correctamente');
    } catch (error) {
      console.error('Error al agregar la respuesta:', error);
      alert('Hubo un error al agregar la respuesta');
    }
  }
};


// Cargar los comentarios cuando se monta el componente
onMounted(() => {
  cargarComentarios();
});
</script>

<template>
  <MainLayout>
    <template #main>
      <h2 class="mt-10 mb-5 text-3xl font-bold text-center text-orange-600 font-poppins">Comentarios de Usuarios</h2>

      <div class="flex justify-center w-full mt-10 font-poppins">
        <!-- Sección de comentarios -->
        <section class="flex flex-wrap w-full justify-evenly">
            <CommentCard
  v-for="(comment, index) in comments"
  :key="index"
  :content="comment.contenido"
  :name="comment.nombre"
  :title="comment.titulo"
  :age="comment.edad"
  :commentId="comment.id"
  :submitReply="agregarRespuesta"
  :responses="comments[index]" 
>
  <!-- Respuestas -->
  <div v-for="(respuesta, idx) in comment.respuestas" :key="idx" class="mt-4 ml-6">
  <p><strong>{{ respuesta.nombre }}:</strong> {{ respuesta.contenido }}</p>
</div>


<!-- Formulario de respuesta -->
<div class="mt-4">
  <textarea 
    v-model="replyContent" <!-- Cambio aquí -->
    placeholder="Escribe tu respuesta aquí..." 
    class="w-full p-2 border rounded-md" 
    rows="3"
  ></textarea>
  <button 
    @click="agregarRespuesta(comment.id, replyContent, name)" 
    class="px-4 py-2 mt-2 text-white rounded-lg bg-sky-600"
  >
    Responder
  </button>
</div>

</CommentCard>
        </section>
      </div>

      <div class="flex flex-col items-center w-full p-4">
        <div class="w-full px-4 py-6 bg-white rounded-lg shadow-lg">
          <h2 class="mb-4 text-xl font-bold text-center text-sky-800">Agregar un Comentario</h2>
          <form @submit.prevent="agregarComentario" class="space-y-6">
            <!-- Campo de Título del Comentario -->
            <div>
              <label for="userName" class="block text-sm font-medium text-gray-700">Nombre del autor</label>
              <input
                type="text"
                id="userName"
                placeholder="Alberto Jimenez"
                v-model="name"
                class="block w-full px-4 py-3 mt-1 mb-2 transition duration-200 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                required
              />
              <label for="commentTitle" class="block text-sm font-medium text-gray-700">Título del Comentario</label>
              <input
                type="text"
                id="commentTitle"
                placeholder="Mi novia me estafó con $10000"
                v-model="titulo"
                class="block w-full px-4 py-3 mt-1 transition duration-200 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                required
              />
              <label for="userAge" class="block text-sm font-medium text-gray-700">Edad</label>
              <input
                type="number"
                id="userAge"
                placeholder="25"
                min="18"
                v-model="age"
                class="block w-full px-4 py-3 mt-1 transition duration-200 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                required
              />
            </div>

            <!-- Campo de Contenido del Comentario -->
            <div>
              <label for="commentContent" class="block text-sm font-medium text-gray-700">Comentario</label>
              <textarea
                id="commentContent"
                rows="4"
                placeholder="Escribe tu comentario aquí..."
                v-model="contenido"
                class="block w-full px-4 py-3 mt-1 transition duration-200 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                required
              ></textarea>
            </div>

            <!-- Botón para Comentar -->
            <div>
              <button
                type="submit"
                class="w-full px-4 py-2 font-semibold text-white transition duration-300 rounded-lg bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50"
              >
                Comentar
              </button>
            </div>
          </form>
        </div>
      </div>
    </template>
  </MainLayout>
</template>