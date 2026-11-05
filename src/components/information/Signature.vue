<template>
    <div class="information-container">
        <textarea class="information-textarea" placeholder="输入新的签名~"></textarea>
        <button type="submit" class="information-btn">提交</button>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
    document.title = "签名"
})
</script>

<style src="../../css/information.css" />