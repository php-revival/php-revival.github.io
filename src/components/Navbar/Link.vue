<script setup lang="ts">
type Props = {
    href: string
    text: string
}

const { href, text } = defineProps<Props>()
</script>

<template>
    <a
        :href="href"
        class="text-md md:text-lg lg:text-xl text-gray-300 border px-5 py-1 rounded-full border-gray-600 hover:border-gray-500 transition-all shadow-xl hover:shadow-gray-400/50"
    >
        {{ text }}
    </a>
</template>