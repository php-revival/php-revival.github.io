<script setup lang="ts">
import type { Review } from '@/types'
import infoIcon from '@/assets/icons/info.svg'

type Props = {
    review: Review
}

const { review } = defineProps<Props>()
</script>

<template>
    <div class="bg-gray-800 rounded-2xl p-6 transition-transform hover:-translate-y-1">
        <div class="flex items-center">
            <img
                :src="review.avatar"
                alt="Avatar"
                class="w-14 h-14 rounded-full shadow-md"
            />

            <h3 class="text-lg lg:text-xl text-gray-300 font-semibold ml-4 text-left">
                {{ review.name }}
            </h3>
        </div>

        <div class="text-left">
            <p v-if="review.content" class="mt-4 text-gray-300 break-words">
                {{ review.content }}
            </p>

            <div v-if="review.note" class="text-gray-500 mt-4 pt-4 flex gap-3 items-center leading-5 border-t border-gray-700">
                <img
                    :src="infoIcon"
                    width="23"
                    height="23"
                    alt="Info icon"
                    class="invert-[.5]"
                />

                <span>{{ review.note }}</span>
            </div>
        </div>
    </div>
</template>