<script setup lang="ts">
import Section from '@/components/Section.vue'
import Review from '@/components/Sections/Reviews/Review.vue'
import reviews from '@/modules/reviews'
</script>

<template>
    <Section
        heading="What Other People are Saying"
        subheading="Here are some nice things our users have said about PHP Revival"
        class="pt-6 md:pt-10 lg:pt-24 pb-5 md:pb-5 lg:pb-2"
    >
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div
                v-for="(reviewColumn, i) in reviews"
                :key="i"
                class="flex flex-col gap-6"
            >
                <Review
                    v-for="review in reviewColumn"
                    :key="review.avatar + review.name + i"
                    :review="review"
                />
            </div>
        </div>
    </Section>
</template>