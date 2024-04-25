<script setup lang="ts">
type Props = {
    heading: string
    subheading: string
}

const { heading, subheading } = defineProps<Props>()
</script>

<template>
    <section class="py-32">
        <div class="container text-center">
            <h2 class="text-5xl font-bold">{{ heading }}</h2>
            <p class="text-gray-400 mt-6 text-2xl">{{ subheading }}</p>

            <div class="mt-14">
                <slot />
            </div>
        </div>
    </section>
</template>