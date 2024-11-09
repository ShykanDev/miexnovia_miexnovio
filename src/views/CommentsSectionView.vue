<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { getFirestore, collection, addDoc, onSnapshot, query, orderBy, doc, updateDoc } from "firebase/firestore";
import CommentCard from '../components/comments/CommentCard.vue';
import MainLayout from '../layouts/MainLayout.vue';
import { useUserInfo } from '../stores/UserInfo';


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
        <section class="flex flex-wrap w-full gap-1">
            <CommentCard
  v-for="(comment, index) in comments"
  :key="index"
  :content="comment.contenido"
  :name="comment.nombre"
  :comentatorName="commentatorName"
  :title="comment.titulo"
  :age="comment.edad"
  :commentId="comment.id"
  :submitReply="agregarRespuesta"
  :responses="comments[index].respuestas" 
  :date="comment.fecha"
>
  <!-- Respuestas -->
  <div v-for="(respuesta, idx) in comment.respuestas" :key="idx" class="mt-4 ml-6">
  <p><strong>{{ respuesta.nombre }}:</strong> {{ respuesta.contenido }}</p>
</div>



</CommentCard>
        </section>
      </div>

 
    </template>
  </MainLayout>
</template>