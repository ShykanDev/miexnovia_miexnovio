<template>
  <div class="bg-white rounded-lg shadow-lg overflow-hidden mb-6">
    <div :class="`bg-${color}-600 p-6`">
      <h3 class="text-xl font-bold text-white">{{ title }}</h3>
    </div>
    <div class="p-4">
      <p class="text-gray-700">{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  color: {
    type: String,
    default: 'red'
  }
})
</script>