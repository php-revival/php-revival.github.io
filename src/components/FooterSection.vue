<script setup lang="ts">
import AppSection from '@/components/AppSection.vue'
</script>

<template>
    <AppSection class="pb-8 md:pb-14">
        <footer class="text-gray-300 text-sm md:text-md lg:text-lg">
            &copy; {{ new Date().getFullYear() }} Serhii Chornenkyi.

            <a
                href="https://github.com/php-revival/php-revival/blob/main/LICENSE"
                target="_blank"
                class="underline"
            >
                MIT License
            </a>
        </footer>
    </AppSection>
</template>