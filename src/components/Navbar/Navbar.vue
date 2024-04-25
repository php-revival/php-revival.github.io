<script setup lang="ts">
import Link from '@/components/Navbar/Link.vue'
</script>

<template>
    <nav class="pt-5 px-2">
        <div class="container">
            <div class="flex justify-between items-center">
                <img
                    src="@/assets/nav-logo.webp"
                    width="190"
                    height="50"
                    alt="PHP Revival extension logo"
                />

                <ul>
                    <li>
                        <Link
                            href="mailto:serhiicho@protonmail.com"
                            text="Contact"
                        />
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>