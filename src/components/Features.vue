<script setup lang="ts">
import AppSection from '@/components/AppSection.vue'
import features from '@/modules/features'
import Feature from '@/components/Feature.vue'
</script>

<template>
    <AppSection
        heading="Experience Comprehensive Features"
        subheading="Revive the PHP documentation experience with PHP Revival"
        class="pt-12 md:pt-16 lg:pt-28 pb-10"
    >
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-20 px-5">
            <Feature
                v-for="feature in features"
                :key="feature.name"
                :feature="feature"
            />
        </div>
    </AppSection>
</template>