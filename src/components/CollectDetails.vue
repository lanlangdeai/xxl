<template>
    <div class="cd-container">
        <div class="cd-title">
            <p class="cd-title-name">文章的名字</p>
            <p class="cd-title-time">
                <i class="iconfont icon-lishijilu cd-icon"></i>
                <span>2017-08-08</span>
            </p>
        </div>
        <div class="cd-content">
            <p class="cd-text">正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p>
            <img src="../assets/collect.jpg" class="cd-img">
            <p class="cd-text">正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p>
            <img src="../assets/collect.jpg" class="cd-img">
            <p class="cd-text">正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p>
        </div>
    </div>
</template>

<script>
    export default {
        created() {
            document.title = "收藏的文章标题"
        }
    }

</script>

<style>
    .cd-container {
        padding-top: 0.2rem;
    }
    
    .cd-title {
        height: 0.8rem;
        background-color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 0.2rem;
    }
    
    .cd-title-name {
        font-size: 16px;
        font-weight: bold;
        color: #333;
    }
    
    .cd-title-time {
        height: 0.8rem;
        display: flex;
        align-items: center;
    }
    .cd-icon{
        margin-right:0.2rem;
        color:#cdcdcd;
    }
    .cd-title-time span {
        font-size: 14px;
        color: #cdcdcd;
    }
    /*正文*/
    .cd-content{
        padding:0.2rem;
        background-color:#fff;
        display:flex;
        flex-direction: column;
        align-items:center;
    }
    .cd-text{
        color:#333;
        font-size:14px;
        text-align:left;
    }
    .cd-img{
        width:100%;
        height:4rem;
        margin:0.2rem 0;
    }
</style>