<template>
    <div class="home-container">
        <div class="home-header">
            <p class="home-logo" @click="refresh">XXL</p>
            <div class="home-search">
                <i class="iconfont icon-fangdajing"></i>
                <input type="text" placeholder="输入你喜欢的故事~" class="home-input">
            </div>
        </div>

        <div class="home-content">
            <ul>
                <li v-for="item in homeList" :key="item.userName">
                    <router-link to="StoryDetails" class="home-row">
                        <div class="home-title">
                            <img src="../assets/headPhoto.png" class="home-headPhoto">
                            <div class="home-name">
                                <p v-html="item.userName"></p>
                                <span v-html="item.time"></span>
                            </div>
                        </div>
                        <img src="../assets/collect.jpg" class="home-title-img">
                        <p class="home-article" v-html="item.article"></p>
                        <div class="home-artice-content" v-html="item.articleContent"></div>
                    </router-link>
                </li>
            </ul>
        </div>
        <app-footer :active="0"></app-footer>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import AppFooter from '../modules/Footer.vue'

const homeList = ref([
    { userName: '收藏你的仰望', time: '2017-10-06&nbsp;&nbsp;21:21', article: '我的第一篇文章', articleContent: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容' },
    { userName: '收藏你的仰望', time: '2017-10-06&nbsp;&nbsp;21:21', article: '我的第一篇文章', articleContent: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容' },
    { userName: '收藏你的仰望', time: '2017-10-06&nbsp;&nbsp;21:21', article: '我的第一篇文章', articleContent: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容' }
])

function refresh() {
    // 重新加载页面
    // window.location.reload();
}

onMounted(() => {
    document.title = "首页"
})
</script>

<style>
    .home-container {
        padding: 1rem 0 1.2rem 0;
        display: flex;
        flex-direction: column;
    }

    .home-logo {
        font-size: 20px;
        color: #fff;
        margin-right: 0.4rem;
    }

    .home-header {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 1rem;
        background-color: #f893b4;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .home-search {
        width: 74%;
        height: 0.68rem;
        background-color: transparent;
        border: 1px solid #fff;
        border-radius: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
    }

    .home-header i {
        color: #fff;
        font-size: 0.45rem;
    }

    .home-input {
        width: 80%;
        height: 0.68rem;
        background-color: transparent;
        padding-left: 0.2rem;
    }

    .home-input::-webkit-input-placeholder {
        color: #fff;
        font-size: 14px;
    }

    .home-content {
        display: flex;
        height: 100%;
        flex-direction: column;
    }

    .home-content li {
        margin-top: 0.2rem;
        background-color: #fff;
    }

    .home-row {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0.1rem 0.2rem;
    }

    .home-headPhoto {
        width: 0.8rem;
        height: 0.8rem;
        margin-right: 0.2rem;
    }

    .home-title {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .home-name {
        display: flex;
        flex-direction: column;
        text-align: left;
    }

    .home-name p {
        font-size: 14px;
        color: #333;
    }

    .home-name span {
        font-size: 12px;
        color: #aaa;
    }

    .home-title-img {
        width: 100%;
        height: 2.4rem;
        margin: 0.2rem 0;
    }

    .home-article,
    .home-artice-content {
        color: #666;
        text-align: left;
    }

    .home-article {
        font-size: 14px;
    }

    .home-artice-content {
        font-size: 12px;
    }
</style>