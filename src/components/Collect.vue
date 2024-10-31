<template>
    <div class="collect-container">
        <ul class="collect-content">
            <li v-for="item in collectData">
                <img src="../assets/collect.jpg" class="collect-img">
                <div class="collect-content-details">
                    <p>
                        <i class="iconfont icon-lishijilu collect-icon"></i>
                        <span v-html="item.time" class="collect-time"></span>
                    </p>
                    <p class="collect-text">文案文案文案文案文案文案文案文案文案文案文案文案文案...</p>
                    <router-link class="collect-btn" to="CollectDetails">查看</router-link>
                </div>
            </li>
        </ul>
        <appFooter :active="2"></appFooter>
    </div>
</template>

<script>
    import appFooter from '../modules/Footer.vue'
    export default {
        components: { 'appFooter': appFooter },
        data() {
            return {
                collectData: [
                    { time: '2017-03-08' },
                    { time: '2017-03-08' },
                    { time: '2017-03-08' },
                    { time: '2017-03-08' },
                    { time: '2017-03-08' },
                    { time: '2017-03-08' }
                ]
            }
        },
        created() {
            document.title = "收藏"
        }
    }

</script>

<style>
    .collect-container {
        padding-top: 0.2rem;
        padding-bottom: 1rem;
    }
    
    .collect-content li {
        padding: 0.2rem;
        background-color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.2rem;
    }
    
    .collect-img {
        /*width: 3rem;*/
        height: 2rem;
        margin-right: 0.2rem;
    }
    
    .collect-content-details {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }
    
    .collect-time {
        font-size: 14px;
        color: #dcdcdc;
    }
    
    .collect-text {
        color: #333;
        font-size: 12px;
        display: flex;
        text-align: left;
    }
    
    .collect-content-details p {
        width: 100%;
        display: flex;
        justify-content: flex-end;
    }
    
    .collect-icon {
        margin-right: 0.1rem;
        color: #aaa;
    }
    
    .collect-btn {
        width: 1.6rem;
        height: 0.55rem;
        background-color: #f893b4;
        line-height: 0.55rem;
        color: #fff;
        font-size: 14px;
        margin-top: 0.2rem;
    }
</style>