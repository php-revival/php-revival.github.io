<script setup lang="ts">
import { ref } from 'vue'

const shadow = ref<number[]>([0, -20, 60])
</script>

<template>
    <img
        src="@/assets/example.webp"
        width="1100"
        height="577"
        class="mx-auto mt-28 _hero-image"
    />
</template>

<style scoped>
._hero-image {
    animation: shadow-animation 2s infinite;
}

@keyframes shadow-animation {
    0% {
        box-shadow: 0 -25px 70px rgba(120,175,230,.5);
    }
    50% {
        box-shadow: 0 -15px 50px rgba(120, 199, 230, 0.5);
    }
    100% {
        box-shadow: 0 -25px 70px rgba(120,175,230,.5);
    }
}
</style>