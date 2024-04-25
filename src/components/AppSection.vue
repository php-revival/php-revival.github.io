<script setup lang="ts">
type Props = {
    heading?: string
    subheading?: string
}

const { heading, subheading } = defineProps<Props>()
</script>

<template>
    <section>
        <div class="container text-center">
            <h2 v-if="heading" class="text-5xl font-bold">{{ heading }}</h2>
            <p v-if="subheading" class="text-gray-400 mt-6 text-2xl">{{ subheading }}</p>

            <div class="mt-20">
                <slot />
            </div>
        </div>
    </section>
</template>