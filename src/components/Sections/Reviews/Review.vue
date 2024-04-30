<script setup lang="ts">
import type { Review } from '@/types'

type Props = {
    review: Review
}

const { review } = defineProps<Props>()
</script>

<template>
    <div class="bg-gray-800 rounded-lg p-6">
        <div class="flex items-center">
            <img
                :src="review.avatar"
                alt="Avatar"
                class="w-14 h-14 rounded-full shadow-md"
            />

            <h3 class="text-lg lg:text-xl text-gray-300 font-semibold ml-4">
                {{ review.name }}
            </h3>
        </div>

        <div class="text-left">
            <p v-if="review.content" class="mt-4 text-gray-300 break-words">
                {{ review.content }}
            </p>

            <p v-if="review.note" class="text-gray-500 mt-3">
                {{ review.note }}
            </p>
        </div>
    </div>
</template>