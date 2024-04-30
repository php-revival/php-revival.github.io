<script setup lang="ts">
import InstallButton from '@/components/Sections/Hero/InstallButton.vue'
</script>

<template>
    <div class="container">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold">
            Documentation Enhancer
        </h1>

        <div class="text-gray-400 mt-3 md:mt-6 text-lg md:text-xl lg:text-2xl">
            <p class="max-w-[700px] mx-auto">
                Maximize your PHP learning with our browser extension that enhances your experience on
                <a href="https://php.net" class="underline" target="_blank">www.php.net</a>
            </p>
        </div>

        <InstallButton />
    </div>
</template>