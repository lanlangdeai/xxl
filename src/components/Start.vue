<template>
    <div class="container">
        <div class="wrapper">
            <div class="start">
                <div class="start-top"></div>
                <div class="start-bottom">
                    <router-link to="Login" class="start-login">用户登录</router-link>
                    <div class="start-operate">
                        <router-link to="Forget" class="start-button">忘记密码</router-link>
                        <router-link to="Register" class="start-button">新用户注册</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style src="../css/index.css" />

<script>
    export default {
        data() {
            return {

            }
        },
        created() {
            document.title = "XXL"
        }
    }

</script>