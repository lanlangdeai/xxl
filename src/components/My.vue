<template>
    <div class="my-container">
        <div class="my-title">
            <div class="my-headPhotoBox">
                <img src="../assets/headPhoto.png" class="my-headPhoto">
                <p>昵称：<span>收藏你的仰望</span></p>
            </div>
            <div class="my-category">
                <router-link class="category-details" to="Visitor">访客</router-link>
                <router-link class="category-details border-left-right" to="Fans">粉丝</router-link>
                <router-link class="category-details" to="Focus">关注</router-link>
            </div>
        </div>
        <div class="my-mainContent">
            <ul class="my-content">
                <li>
                    <router-link class="my-row" to="ChangeInfo">
                        <p class="my-content-details">
                            <i class="iconfont icon-gerenziliao my-icon"></i>
                            <span>个人资料</span>
                        </p>
                        <i class="iconfont icon-iconfontjinru"></i>
                    </router-link>
                    <router-link class="my-row" to="Message">
                        <p class="my-content-details">
                            <i class="iconfont icon-xiaoxi my-icon"></i>
                            <span>我的消息</span>
                        </p>
                        <i class="iconfont icon-iconfontjinru"></i>
                    </router-link>
                </li>
            </ul>
            <ul class="my-content">
                <li>
                    <router-link class="my-row" to="Collect">
                        <p class="my-content-details">
                            <i class="iconfont icon-shoucang1 my-icon"></i>
                            <span>我的收藏</span>
                        </p>
                        <i class="iconfont icon-iconfontjinru"></i>
                    </router-link>
                    <router-link class="my-row" to="Story">
                        <p class="my-content-details">
                            <i class="iconfont icon-zuopin my-icon"></i>
                            <span>我的故事</span>
                        </p>
                        <i class="iconfont icon-iconfontjinru"></i>
                    </router-link>
                </li>
            </ul>
            <ul class="my-content">
                <li>
                    <router-link class="my-row" to="ChangePwd">
                        <p class="my-content-details">
                            <i class="iconfont icon-xiugaimima my-icon"></i>
                            <span>修改密码</span>
                        </p>
                        <i class="iconfont icon-iconfontjinru"></i>
                    </router-link>
                    <div class="my-row" @click="quit">
                        <p class="my-content-details">
                            <i class="iconfont icon-web-quit my-icon"></i>
                            <span>退出</span>
                        </p>
                        <i class="iconfont icon-iconfontjinru"></i>
                    </div>
                </li>
            </ul>
        </div>
        <appFooter :active="3"></appFooter>
    </div>
</template>

<script>
    import { MessageBox } from 'mint-ui';
    import appFooter from '../modules/Footer.vue'
    let headPhoto = "../assets/headPhoto.png"
    export default {
        components: { 'appFooter': appFooter },
        data() {
            return {
            }
        },
        methods: {
            quit() {
                MessageBox.confirm('确定退出?').then(action => {
                    this.$router.push('/Login')
                });
            }
        },
        created() {
            document.title = "我的"
        }
    }

</script>

<style>
    .my-container {
        position: relative;
    }
    
    .my-title {
        width: 100%;
        height: 5rem;
        background: url("../assets/my-banner.png") no-repeat;
        background-size: cover;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 10;
    }
    
    .my-headPhotoBox {
        margin-top: 0.6rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
    .my-headPhotoBox p {
        font-size: 16px;
        color: #888;
    }
    
    .my-headPhoto {
        width: 2rem;
        height: 2rem;
        margin-bottom: 0.4rem;
    }
    
    .my-content-details {
        color: #888;
        font-size: 16px;
    }
    
    .my-category {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        padding: 0.2rem 0;
        background-color: rgba(255, 255, 255, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
    }
    
    .category-details {
        display: flex;
        flex: 1;
        justify-content: center;
        align-items: center;
        color: #f893b4;
        font-size: 16px;
    }
    
    .border-left-right {
        border-left: 1px solid #f893b4;
        border-right: 1px solid #f893b4;
    }
    
    .my-mainContent {
        padding-top: 5rem;
        height: 8rem;
        overflow-y: auto;
        padding-bottom: 0.2rem;
    }
    
    .my-content {
        background-color: #fff;
        border-top: 1px solid #f1f1f1;
        padding: 0 0.2rem;
        margin-top: 0.15rem;
    }
    
    .my-content li {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    
    .my-row {
        padding: 0.26rem 0;
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        border-bottom: 1px solid #f1f1f1;
    }
    
    .my-icon {
        font-size: 0.38rem;
        margin-right: 0.2rem;
        opacity: 0.7;
    }
    
    .my-row .icon-iconfontjinru {
        font-size: 0.25rem;
        color: #aaa;
        margin: 0;
    }
    
    .my-content span {
        font-size: 15px;
        color: #888;
    }
    
    .icon-gerenziliao {
        color: #7393f9;
    }
    
    .icon-xiaoxi {
        color: #d1569f;
    }
    
    .icon-shoucang1 {
        color: #f9d440;
    }
    
    .icon-zuopin {
        color: #7baa77;
        margin-right: 0;
    }
    
    .icon-xiugaimima {
        color: #fa8e4c;
    }
    
    .icon-web-quit {
        color: #f00;
    }
</style>