<script setup lang="ts">
import Link from '@/components/Navbar/Link.vue'
</script>

<template>
    <nav class="pt-4">
        <div class="container">
            <div class="flex justify-between items-center">
                <img
                    src="@/assets/nav-logo.webp"
                    width="200"
                    height="64"
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