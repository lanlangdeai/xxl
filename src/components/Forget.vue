<template>
    <div class="container">
        <div class="wrapper">
            <ul class="login-box">
                <li>
                    <i class="iconfont icon-user"></i>
                    <input type="text" placeholder="请输入用户名" />
                </li>
                <li class="sms-box">
                    <i class="iconfont icon-save"></i>
                    <p>
                        <input type="number" placeholder="请输入验证码" />
                        <img src="../assets/qrcode.png" class="register-qrcode">
                    </p>
                </li>
                <li>
                    <i class="iconfont icon-password"></i>
                    <input type="password" placeholder="请输入新密码" />
                </li>
                <li>
                    <i class="iconfont icon-password"></i>
                    <input type="password" placeholder="请再次输入新密码" />
                </li>
                <li class="li">
                    <button type="submit">提交</button>
                </li>
                <li class="li">
                    <router-link to="Login">返回登录</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<style src="../css/index.css" />

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
    document.title = "忘记密码"
})
</script>