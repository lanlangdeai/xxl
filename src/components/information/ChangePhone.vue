<template>
    <div class="information-container">
        <input class="information-title" type="tel" placeholder="输入新的手机号" />
        <button type="submit" class="information-btn">提交</button>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
    document.title = "手机号"
})
</script>

<style src="../../css/information.css" />