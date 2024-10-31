<template>
    <div class="msg-container">
        <ul class="msg-content">
            <li v-for="item in msgData">
                <div class="msg-header">
                    <p>
                        <img src="../assets/headPhoto.png" class="msg-img">
                        <span class="msg-info">
                            <span v-html="item.name"></span>
                        <span v-html="item.time"></span>
                        </span>
                    </p>
                    <button type="button" @click="reply(item)">回复</button>
                </div>
                <span class="msg-comment" v-html="item.content"></span>
                <div class="msg-details">
                    <img src="../assets/collect.jpg">
                    <p><span class="msg-name" v-html="item.username"></span>{{'：'+item.details}}</p>
                </div>
                <div class="msg-replyDetails">
                    <p><span class="msg-name" v-html="item.name"></span>{{'：'+item.content}}</p>
                    <p><span class="msg-name" v-html="item.username"></span>{{'&nbsp;&nbsp;回复&nbsp;&nbsp;'}}<span class="msg-name"
                            v-html="item.name"></span>{{'&nbsp;&nbsp;'+item.replyContent}}
                    </p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import { MessageBox } from 'mint-ui';
    export default {
        data() {
            return {
                msgData: [
                    { name: '昵称1', time: '2017-05-12', content: '真漂亮', details: '就返回四大皆空混分巨兽都放假回家就返回四大皆空混分巨兽都放假回家就返回四大皆空混分巨兽都放假回家', username: '收藏你的仰望', replyContent: '很好' },
                    { name: '昵称2', time: '2017-05-12', content: '真漂亮', details: '就返回四大皆空混分巨兽都放假回家就返回四大皆空混分巨兽都放假回家就返回四大皆空混分巨兽都放假回家', username: '收藏你的仰望', replyContent: '很好' },
                    { name: '昵称3', time: '2017-05-12', content: '评论内容', details: '就返回四大皆空混分巨兽都放假回家就返回四大皆空混分巨兽都放假回家就返回四大皆空混分巨兽都放假回家', username: '收藏你的仰望', replyContent: '很好' }
                ]
            }
        },
        methods: {
            reply(item) {
                MessageBox.prompt('请输入你对&nbsp;&nbsp;' + item.name + '&nbsp;&nbsp;要说的话', '').then(({ value, action }) => {
                    console.log(value, action)
                });
            }
        },
        created() {
            document.title = "我的消息"
        }
    }

</script>

<style>
    .bottom {
        width: 100%;
        min-height: 4rem;
    }
    
    .msg-container {
        font-size: 14px;
        color: #333;
    }
    
    .add {
        margin-top: 10rem;
    }
    
    .msg-content {
        padding: 0 0.1rem 0.1rem 0.1rem;
    }
    
    .msg-content li {
        background-color: #fff;
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 0.1rem;
        margin-top: 0.2rem;
    }
    
    .msg-header>p {
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }
    
    .msg-img {
        width: 0.8rem;
        height: 0.8rem;
        margin-right: 0.2rem;
    }
    
    .msg-info {
        display: flex;
        flex-direction: column;
        text-align: left;
        color: #888;
    }
    
    .msg-header {
        width: 100%;
        display: flex;
        display: -webkit-box;
        justify-content: space-between;
        align-items: center;
    }
    
    .msg-comment {
        width: 100%;
        min-height: 0.6rem;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin: 0.1rem 0;
    }
    
    .msg-details {
        width: 100%;
        min-height: 1.6rem;
        background-color: #f9f9f9;
        display: flex;
        align-items: center;
        flex-direction: row;
    }
    
    .msg-details img {
        width: 1.6rem;
        height: 1.6rem;
        margin-right: 0.2rem;
    }
    
    .msg-details p {
        flex: 1;
        text-align: left;
        font-size: 14px;
    }
    
    .msg-name {
        color: #f893b4;
    }
    
    .msg-reply {
        width: 100%;
        display: flex;
        justify-content: flex-end;
    }
    
    .msg-header>button {
        width: 1rem;
        height: 0.52rem;
        color: #fff;
        background-color: #f893b4;
        font-size: 14px;
    }
    
    .msg-replyDetails {
        width: 100%;
        text-align: left;
        margin: 0.2rem 0;
    }
    
    .msg-replyDetails>p {
        margin-bottom: 0.1rem;
    }
    
    .msg-replyDetails>p:last-child {
        margin-bottom: 0;
    }
</style>