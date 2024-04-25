<script setup lang="ts">
import AppSection from '@/components/AppSection.vue'
import features from '@/modules/features'
</script>

<template>
    <AppSection
        heading="Experience Comprehensive Features"
        subheading="Revive the PHP documentation experience with PHP Revival"
        class="pt-28 pb-10"
    >
        <div class="grid grid-cols-3 gap-20 px-5">
            <div
                v-for="feature in features"
                :key="feature.name"
                target="_blank"
                class="flex flex-col items-center"
            >
                <img
                    :src="feature.icon"
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
        </div>
    </AppSection>
</template>