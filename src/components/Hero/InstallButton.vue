<script setup lang="ts">
import { computed, ref } from 'vue'
import { BrowserType } from '@/types'
import getUserBrowser from '@/modules/getUserBrowser'
import browsers from '@/modules/browsers'

const browser = ref<BrowserType | null>(getUserBrowser())

const icon = computed<string>(() => {
    switch (browser.value) {
        case BrowserType.Brave:
            return browsers.brave.icon
        case BrowserType.Chrome:
            return browsers.chrome.icon
        case BrowserType.Edge:
            return browsers.edge.icon
        case BrowserType.Firefox:
            return browsers.firefox.icon
        default:
            return ''
    }
})

const href = computed<string>(() => {
    switch (browser.value) {
        case BrowserType.Brave:
            return browsers.brave.url
        case BrowserType.Chrome:
            return browsers.chrome.url
        case BrowserType.Edge:
            return browsers.edge.url
        case BrowserType.Firefox:
            return browsers.firefox.url
        default:
            return ''
    }
})
</script>

<template>
    <div>
        <a
            :href="href"
            class="bg-main inline-block hover:bg-main-hover text-lg md:text-xl text-gray-300 mt-5 md:mt-8 px-8 md:px-10 py-3 md:py-4 rounded-full transition-colors shadow-xl"
        >
            <span v-if="browser" class="flex items-center gap-3">
                <img :src="icon" width="27" height="27">

                Add to {{ browser }}
            </span>

            <span v-else class="flex items-center gap-3">
                Works with
                <img
                    v-for="browser in browsers"
                    :key="browser.icon"
                    :src="browser.icon"
                    width="20"
                    height="20"
                >
            </span>
        </a>

        <p class="text-gray-400 text-center mt-4 text-sm">
            <span v-if="browser === null">
                Your current browser doesn't support the extension!<br>
                Install one of the supported browsers to use the extension
            </span>
            <span v-else>Your current browser supports the extension</span>
        </p>
    </div>
</template>