<script setup lang="ts">
import Parallaxy from '@lucien144/vue3-parallaxy'
</script>

<template>
    <div class="container">
        <Parallaxy :speed="70" direction="normal">
            <img
                src="@/assets/example.png"
                width="1100"
                height="577"
                class="mx-auto mt-24 md:mt-32 lg:mt-36 rounded-xl"
            />
        </Parallaxy>
    </div>
</template>
