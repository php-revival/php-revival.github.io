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
            <h2 v-if="heading" class="text-3xl md:text-4xl lg:text-5xl font-bold">
                {{ heading }}
            </h2>

            <p v-if="subheading" class="text-gray-400 mt-2 md:mt-3 lg:mt-5 sm:text-lg md:text-xl xl:text-2xl">
                {{ subheading }}
            </p>

            <div class="mt-10 md:mt-14 lg:mt-20">
                <slot />
            </div>
        </div>
    </section>
</template>