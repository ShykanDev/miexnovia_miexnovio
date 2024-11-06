<template>
    <div>
        <div class="p-4 mx-auto mb-4 bg-white border border-gray-200 rounded-lg shadow-md ">
        
            <div class="flex items-center gap-1">
                <v-icon name="fa-user-alt" class="text-sky-800" />
                <p class="mb-1 text-base font-semibold text-gray-800">Carlos</p>
            </div>
            <!-- Name and Age -->
            <p class="mb-1 text-xs font-semibold text-gray-800">25 Años</p>
            
            <!-- Comment Title -->

            <p class="mb-2 text-gray-800 -semibold text">
                "Mi Exnovia fue lo peor que me ha pasado"
            </p>
            <!-- Comment Content -->
            <p class="mb-4 text-sm text-gray-800">
                "Mi exnovia comenzó a pedir dinero prestado diciendo que sería temporal, pero nunca lo devolvió. Al final, quedé con deudas y sin ninguna explicación. Fue una experiencia que no le deseo a nadie."
            </p>
     
            <!-- Reply Button -->
             <div class="flex justify-center gap-1 px-3 py-1 text-white rounded-lg bg-sky-800 min-w-24 max-w-32">
                 <button class="text-sm font-semibold hover:underline focus:outline-none">
                     Responder
                    </button>
                    <v-icon name="bi-pencil-fill" class="text-white" />
            </div>
                <!-- Date -->
                 <div class="flex items-center justify-end gap-1">
                     <v-icon name="io-calendar" class="text-sky-800" />
                     <p class="mb-1 text-xs text-gray-500 text-end">Publicado el 11/05/2024 </p>
                 </div>
       
        </div>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps({
    title: String,
    description: String,
    date: String
})
</script>

<style scoped>

</style>
