<template>
    <div class="container">
        <div class="wrapper">
            <ul class="login-box">
                <li>
                    <i class="iconfont icon-user"></i>
                    <input type="text" placeholder="请输入用户名" maxlength="11" />
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
                    <input type="password" placeholder="请输入密码" />
                </li>
                <li class="sms-box">
                    <i class="iconfont icon-password"></i>
                    <p>
                        <input type="password" placeholder="请再次输入密码" />
                    </p>
                </li>
                <li class="li">
                    <button type="submit">注册</button>
                </li>
                <li class="li">
                    <router-link to="Login">返回登录</router-link>
                </li>
            </ul>
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
            document.title = "注册"
        }
    }

</script>