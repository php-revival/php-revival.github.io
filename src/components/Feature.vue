<script setup lang="ts">
import type { Feature } from '@/types'

type Props = {
    feature: Feature
}

const { feature } = defineProps<Props>()
</script>

<template>
    <div class="flex flex-col items-center">
        <img
            :src="feature.icon"
            :alt="`${feature.name} icon`"
            width="70"
            height="70"
            class="w-[40px] md:w-[50px] lg:w-[70px]"
        >

        <h3 class="text-lg md:text-xl lg:text-2xl font-bold mt-4">
            {{ feature.name }}
        </h3>

        <p class="text-gray-300 text-sm md:text-md lg:text-lg mt-1">
            {{ feature.description }}
        </p>
    </div>
</template>