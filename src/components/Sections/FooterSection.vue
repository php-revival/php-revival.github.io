<script setup lang="ts">
import Section from '@/components/Section.vue'
</script>

<template>
    <Section class="pb-8 md:pb-14">
        <footer class="text-gray-300 text-sm md:text-md lg:text-lg">
            &copy; {{ new Date().getFullYear() }} Serhii Chornenkyi.

            <a
                href="https://github.com/php-revival/php-revival/blob/master/LICENSE"
                target="_blank"
                class="underline"
            >
                MIT License
            </a>
        </footer>
    </Section>
</template>
