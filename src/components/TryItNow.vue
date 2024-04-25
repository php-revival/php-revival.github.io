<script setup lang="ts">
import AppSection from '@/components/AppSection.vue'
import browsers from '@/modules/browsers'
</script>

<template>
    <AppSection
        heading="Try it now - Free"
        subheading="PHP Revival extension is available for free on Chrome, Firefox, Brave and Edge"
        class="pt-32 pb-12"
    >
        <div class="flex items-center justify-center gap-16">
            <a
                v-for="browser in browsers"
                :key="browser.icon"
                :href="browser.url"
                target="_blank"
                class="transition-transform hover:scale-125 duration-300"
            >
                <img
                    :src="browser.icon"
                    width="100"
                    height="100"
                >
            </a>
        </div>
    </AppSection>
</template>