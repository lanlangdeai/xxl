<template>
    <div class="visitor-container">
        <ul>
            <li class="visitor-row" v-for="(item, i) in visitorList" :key="i">
                <div class="visitor-time">{{ item.time }}</div>
                <div class="visitor-content" v-for="(name, j) in item.person" :key="j">
                    <div class="visitor-details">
                        <div class="visitor-left">
                            <img src="../../assets/headPhoto.png" class="visitor-img">
                            <p>
                                <span class="visitor-text">{{ name.name }}</span>
                                <span class="visitor-text">20:14&nbsp;&nbsp;访问了您的文章</span>
                            </p>
                        </div>
                        <div class="visitor-right" @click="showSheet = true">
                            <i class="iconfont icon-shanchu2"></i>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
        <van-action-sheet
            v-model:show="showSheet"
            :actions="actions"
            cancel-text="取消"
            @select="onSelect"
        />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const showSheet = ref(false)
const actions = [{ name: '确定删除' }]

const visitorList = ref([
    {
        time: '2017-09-08',
        person: [
            { name: '收藏你的仰望' },
            { name: '你的名字' },
            { name: '他的名字' }
        ]
    },
    {
        time: '2017-09-12',
        person: [
            { name: '你的名字' }
        ]
    }
])

function onSelect() {
    showSheet.value = false
}

onMounted(() => {
    document.title = "访客"
})
</script>

<style>
    .visitor-container {
        padding-top: 0.2rem;
    }

    .visitor-row {
        width: 100%;
        margin-top: 0.2rem;
    }

    .visitor-time {
        height: 1rem;
        background-color: #fff;
        text-align: left;
        color: #666;
        font-size: 16px;
        padding-left: 0.2rem;
        line-height: 1rem;
        border-bottom: 1px solid #f1f1f1;
    }

    .visitor-content {
        padding: 0 0.2rem;
        background-color: #fff;
        min-height: 1.2rem;
    }

    .visitor-details {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        min-height: 1.2rem;
        border-bottom: 1px solid #f1f1f1;
    }

    .visitor-left {
        display: flex;
        flex-direction: row;
        min-height: 1.2rem;
        align-items: center;
    }

    .visitor-left p {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: left;
        min-height: 1.2rem;
    }

    .visitor-img {
        width: 1rem;
        height: 1rem;
        margin-right: 0.2rem;
    }

    .visitor-text {
        color: #aaa;
        font-size: 14px;
        line-height: 0.4rem;
    }

    .visitor-right {
        width: 1.2rem;
        min-height: 1.2rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .icon-shanchu2 {
        font-size: 0.4rem;
        color: #dcdcdc;
    }

    .visitor-right:active .icon-shanchu2 {
        color: red;
    }
</style>