<template>
    <div class="homePage-container">
        <appFooter :active="1"></appFooter>
    </div>
</template>

<script>
    import appFooter from '../modules/Footer.vue'
    export default {
        components:{'appFooter':appFooter},
        data() {
            return {

            }
        },
        created() {
            document.title = "添加回忆"
        }
    }
</script>

<style>

</style>