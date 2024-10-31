<template>
    <div class="information-container">
        <input class="information-title" type="mail" placeholder="输入新的邮箱"/>
        <button type="submit" class="information-btn">提交</button>
    </div>
</template>

<script>
    export default{
        created(){
            document.title="邮箱"
        }
    }
</script>

<style src="../../css/information.css" />