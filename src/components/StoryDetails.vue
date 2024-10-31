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
        <div class="cd-footer" @click="addComment">
            <i class="iconfont icon-comment-pen"></i>
            <label>点击输入你的评论</label>
        </div>
        <mt-popup v-model="popupVisible" position="bottom" class="cd-bottom">
            <div>
                <span>请告诉他（她）</span>
            </div>
            <textarea></textarea>
            <div>
                <button type="button" class="cd-publish">发表</button>
            </div>
        </mt-popup>
    </div>
</template>

<script>
    import { Popup } from 'mint-ui';
    export default {
        data() {
            return {
                popupVisible: false
            }
        },
        methods: {
            addComment() {
                this.popupVisible = true
            }
        },
        created() {
            document.title = "我的故事的文章标题"
        }
    }

</script>

<style>
    .cd-container {
        padding-top: 0.2rem;
        padding-bottom: 1rem;
        position: relative;
        font-size: 16px;
        color: #333;
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
    
    .cd-icon {
        margin-right: 0.2rem;
        color: #cdcdcd;
    }
    
    .cd-title-time span {
        font-size: 14px;
        color: #cdcdcd;
    }
    /*正文*/
    
    .cd-content {
        padding: 0.2rem;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    .cd-text {
        color: #333;
        font-size: 14px;
        text-align: left;
    }
    
    .cd-img {
        width: 100%;
        height: 4rem;
        margin: 0.2rem 0;
    }
    
    .cd-footer {
        width: 100%;
        height: 0.88rem;
        background-color: #fff;
        border-top: 1px solid #cdcdcd;
        position: fixed;
        left: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .cd-footer>label {
        color: #666;
        font-size: 16px;
    }
    
    .cd-footer>i {
        font-size: 0.5rem;
        margin-right: 0.2rem;
        color: #666;
    }
    
    .cd-bottom {
        width: 100%;
        min-height: 2.4rem;
        padding: 0.2rem;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        font-size: 15px;
    }
    
    .cd-bottom textarea {
        resize: none;
        width: 90%;
        height: 1.2rem;
        margin: 0.2rem;
    }
    
    .cd-bottom>div {
        width: 90%;
        display: flex;
        display: -webkit-box;
    }
    
    .cd-bottom>div:last-child {
        justify-content: flex-end;
    }
    
    .cd-publish {
        width: auto;
        height: auto;
        padding: 0.1rem 0.2rem;
        background-color: #fff;
        color: #f893b4;
        border: 1px solid #f893b4;
        font-size: 14px;
    }
</style>