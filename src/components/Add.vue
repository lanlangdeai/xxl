<template>
    <div class="homePage-container">
        <app-footer :active="1"></app-footer>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import AppFooter from '../modules/Footer.vue'

onMounted(() => {
    document.title = "添加回忆"
})
</script>

<style>
</style>