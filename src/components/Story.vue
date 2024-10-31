<template>
    <div class="story-container">
        <router-link to="StoryDetails" class="story-content">
            <li v-for="item in storyData">
                <div class="story-content-details">
                    <p class="story-title">我的标题</p>
                    <p class="story-time">
                        <i class="iconfont icon-lishijilu story-icon"></i>
                        <span v-html="item.time" class="story-time-text"></span>
                    </p>
                </div>
                <p class="story-text">文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文...</p>
            </li>
        </router-link>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                storyData: [
                    { time: '2017-03-08' },
                    { time: '2017-03-08' },
                    { time: '2017-03-08' },
                    { time: '2017-03-08' },
                    { time: '2017-03-08' },
                    { time: '2017-03-08' },
                    { time: '2017-03-08' },
                    { time: '2017-03-08' },
                    { time: '2017-03-08' },
                    { time: '2017-03-08' },
                ]
            }
        },
        created() {
            document.title = "我的故事"
        }
    }

</script>

<style>
    .story-container {
        padding-top: 0.2rem;
    }
    
    .story-content {
        margin: 0;
    }
    
    .story-content li {
        padding: 0.2rem;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 0.2rem;
    }
    
    .story-content-details {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    
    .story-time-text {
        font-size: 14px;
        color: #dcdcdc;
    }
    
    .story-time {
        display: flex;
        flex-direction: row;
    }
    
    .story-text {
        width: 100%;
        text-align: left;
        color: #333;
        font-size: 12px;
        margin-top: 0.2rem;
    }
    
    .story-title {
        color: #333;
        font-size: 16px;
        font-weight: bold;
    }
    
    .story-icon {
        margin-right: 0.1rem;
        color: #aaa;
    }
</style>