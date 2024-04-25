<script setup lang="ts">
import { computed, ref } from 'vue'
import { BrowserType } from '@/types'
import getUserBrowser from '@/modules/getUserBrowser'
import braveIcon from '@/assets/browsers/brave.svg'
import chromeIcon from '@/assets/browsers/chrome.svg'
import edgeIcon from '@/assets/browsers/edge.svg'
import firefoxIcon from '@/assets/browsers/firefox.svg'

const browser = ref<BrowserType | null>(getUserBrowser())

const allIcons: string[] = [
    chromeIcon,
    firefoxIcon,
    braveIcon,
    edgeIcon,
]

const browserIcon = computed<string>(() => {
    switch (browser.value) {
        case BrowserType.Brave:
            return braveIcon
        case BrowserType.Chrome:
            return chromeIcon
        case BrowserType.Edge:
            return edgeIcon
        case BrowserType.Firefox:
            return firefoxIcon
        default:
            return ''
        }
})

const href = 'https://chromewebstore.google.com/detail/php-revival/fceclmihdanbepiogjoeiolnpkalcjpe'
</script>

<template>
    <div>
        <a
            :href="href"
            class="bg-main inline-block hover:bg-main-hover text-xl text-gray-300 mt-8 px-10 py-4 rounded-full transition-colors shadow-xl"
        >
            <span v-if="browser" class="flex items-center gap-3">
                <img
                    :src="browserIcon"
                    width="27"
                    height="27"
                >

                Add to {{ browser }}
            </span>

            <span v-else class="flex items-center gap-3">
                Works with <img
                    v-for="icon in allIcons"
                    :key="icon"
                    :src="icon"
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