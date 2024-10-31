<template>
  <div class="container">
    <div class="wrapper">
      <ul class="login-box">
        <li>
          <i class="iconfont icon-user"></i>
          <input type="text" placeholder="请输入用户名" maxlength="11"/>
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

<script>
  import { Indicator } from 'mint-ui';
  export default {
    data() {
      return {
        ShowLoading: false
      }
    },
    methods: {
      login() {
        // Indicator.open({
        //   text: '加载中...',
        //   spinnerType: 'fading-circle'
        // });

        Indicator.close();
      }
    },
    created() {
      document.title = "登录"
    }
  }

</script>