<template>
    <div class="">
        <!-- main container -->
        <div class="w-[400px] bg-slate-100 p-2 rounded-xl ">
            <div class="flex flex-wrap items-center gap-3 p-1 mb-2">
                <img :src="props.img" class="rounded-full w-14 h-14" alt="imagen persona">
                <h3 class="font-medium">{{ nameAge }}</h3>
            </div>
            <div>
                <h5 class="italic text-center">{{ title }}</h5>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
const props = defineProps({
    img: String,
    nameAge: String,
    title: String,
})
</script>

<style scoped>

</style>