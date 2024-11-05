<template>
    <div>
        <div class="max-w-md p-4 mx-auto mb-4 bg-white border border-gray-200 rounded-lg shadow-md">
        
            <!-- Name and Age -->
            <p class="mb-1 text-base font-semibold text-gray-800">Carlos</p>
            <p class="mb-1 text-xs font-semibold text-gray-800">25 Años</p>
            
            <!-- Comment Content -->
            <p class="mb-4 text-sm text-gray-800">
                "Mi exnovia comenzó a pedir dinero prestado diciendo que sería temporal, pero nunca lo devolvió. Al final, quedé con deudas y sin ninguna explicación. Fue una experiencia que no le deseo a nadie."
            </p>
    <!-- Date -->
    <p class="mb-1 text-xs text-gray-500">Publicado el 5 de noviembre de 2024</p>
            
            <!-- Reply Button -->
            <button class="text-sm font-semibold text-sky-600 hover:underline focus:outline-none">
                Responder
            </button>
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
