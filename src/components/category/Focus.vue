<template>
    <div class="fans-container">
        <ul>
            <li v-for="(item,index) in fansList" class="fans-row">
                <div class="fans-left">
                    <img src="../../assets/headPhoto.png" class="fans-img">
                    <span class="fans-text" v-html="item.name"></span>
                </div>
                <div class="fans-right">
                    <button type="button" @click="FocusEachother(item)" :class="item.isSelect?'actives':''" v-html="item.isSelect?'关注':'已关注'"></button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                fansList: [
                    { name: '收藏你的仰望', isSelect: false },
                    { name: '你的名字', isSelect: false },
                    { name: '他的名字', isSelect: false },
                    { name: '我的名字', isSelect: false },
                    { name: '她的名字', isSelect: false }
                ],
                indexs: ''
            }
        },
        methods: {
            FocusEachother(item) {
                item.isSelect = !item.isSelect
            }
        },
        created() {
            document.title = "关注"
        }
    }

</script>

<style>
    .fans-container {
        padding-top: 0.2rem;
    }
    
    .fans-row {
        background-color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 0.2rem;
        border-bottom: 1px solid #f1f1f1;
    }
    
    .fans-left {
        min-height: 1.2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
    }
    
    .fans-img {
        width: 1rem;
        height: 1rem;
        margin-right: 0.2rem;
    }
    
    .fans-text {
        font-size: 16px;
        color: #333;
    }
    
    .fans-right {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .fans-right button {
        width: 1.2rem;
        height: 0.54rem;
        background-color: transparent;
        border: 1px solid #f893b4;
        font-size: 12px;
        color:#f893b4;
    }
    
    .fans-right button.actives {
        width: 1.2rem;
        height: 0.54rem;
        color: #fff;
        background-color: #f893b4;
        font-size: 12px;
    }
</style>