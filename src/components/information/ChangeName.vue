<template>
    <div class="information-container">
        <input class="information-title" type="text" placeholder="输入新的title~"/>
        <button type="submit" class="information-btn">提交</button>
    </div>
</template>

<script>
    export default{
        created(){
            document.title="昵称"
        }
    }
</script>

<style src="../../css/information.css" />