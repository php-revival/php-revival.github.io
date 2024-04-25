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
        >

        <h3 class="text-2xl font-bold mt-4">
            {{ feature.name }}
        </h3>

        <p class="text-gray-300 text-lg mt-1">
            {{ feature.description }}
        </p>
    </div>
</template>