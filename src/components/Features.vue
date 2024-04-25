<script setup lang="ts">
import AppSection from '@/components/AppSection.vue'
import features from '@/modules/features'
import Feature from '@/components/Feature.vue'
</script>

<template>
    <AppSection
        heading="Experience Comprehensive Features"
        subheading="Revive the PHP documentation experience with PHP Revival"
        class="pt-28 pb-10"
    >
        <div class="grid grid-cols-3 gap-20 px-5">
            <Feature
                v-for="feature in features"
                :key="feature.name"
                :feature="feature"
            />
        </div>
    </AppSection>
</template>