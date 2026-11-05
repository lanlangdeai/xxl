<template>
  <div class="container">
    <div class="wrapper">
      <ul class="login-box">
        <li>
          <i class="iconfont icon-user"></i>
          <input type="text" placeholder="请输入用户名" maxlength="11" />
        </li>
        <li>
          <i class="iconfont icon-password"></i>
          <input type="password" placeholder="请输入密码" />
        </li>
        <li class="li">
          <div class="login-operation">
            <input type="checkbox" value="remember" id="remember">
            <label for="remember">记住密码</label>
          </div>
        </li>
        <li class="li">
          <router-link to="Homepage" class="toHome">
            <button type="submit" @click="login">登录</button>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style src="../css/index.css" />

<script setup>
import { onMounted } from 'vue'

function login() {
  // 登录逻辑（待接入后端）
}

onMounted(() => {
  document.title = "登录"
})
</script>