<template>
    <div class="info-container">
        <ul class="info-form">
            <li>
                <span>头像</span>
                <div class="info-right">
                    <img src="../assets/headPhoto.png" alt="" class="changePhoto">
                    <i class="iconfont icon-iconfontjinru"></i>
                </div>
            </li>
            <li>
                <span>性别</span>
                <div class="info-right">
                    <span class="sex">女</span>
                    <i :style="{'visibility':'hidden'}" class="iconfont icon-iconfontjinru"></i>
                </div>
            </li>
            <li v-for="item in infoData">
                <router-link :to="item.url" class="info-row">
                    <span v-html="item.name"></span>
                    <div class="info-right">
                        <span v-html="item.value"></span>
                        <i class="iconfont icon-iconfontjinru"></i>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                infoData: [
                    { name: '昵称', value: '收藏你的仰望',url:'ChangeName' },
                    { name: '手机号', value: '13273380029',url:'ChangePhone' },
                    { name: '邮箱', value: '3513412242@qq.com',url:'ChangeMail' },
                    { name: '签名', value: 'You are the best!',url:'Signature' },
                ]
            }
        },
        created() {
            document.title = "个人资料"
        }
    }

</script>

<style>
    .info-container {
        padding-top: 0.2rem;
    }
    
    .info-form {
        padding: 0 0.2rem;
        background-color: #fff;
    }
    
    .info-form li {
        padding: 0 0.1rem;
        border-bottom: 1px solid #f1f1f1;
    }
    
    .info-form li,
    .info-row {
        min-height: 0.8rem;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .info-right {
        min-height: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .changePhoto {
        width: 1.6rem;
        height: 1.6rem;
    }
    
    .info-form span {
        font-size: 16px;
        color: #999;
    }
    
    .info-right i {
        font-size: 0.24rem;
        margin-left:0.1rem;
    }
</style>