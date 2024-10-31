<template>
    <div class="change-container">
        <ul class="change-form">
            <li>
                <input type="password" value="" placeholder="请输入旧密码">
            </li>
            <li>
                <input type="password" value="" placeholder="请输入新密码">
                <input type="password" value="" placeholder="请再次输入新密码">
            </li>
            <button type="submit">我要改</button>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        created() {
            document.title = "更改密码"
        }
    }

</script>

<style>
    .change-container {
        width: 100%;
        height: 100%;
        background-color: #f1f1f1;
    }
    
    .change-form {
        width: 100%;
        padding-top: 0.2rem;
    }
    
    .change-form li {
        width: 100%;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        margin-bottom: 0.2rem;
    }
    
    .change-form input {
        height: 1rem;
        border-radius: 0;
        padding-left: 0.2rem;
        border-bottom: 1px solid #f1f1f1;
        line-height: 1rem;
        font-size: 16px;
    }
    
    .change-form input::-webkit-input-placeholder {
        color: #aaa;
        font-size: 16px;
    }
    
    .change-form button {
        width: 92%;
        height: 1rem;
        background-color: #f893b4;
        color: #fff;
        font-size: 16px;
        border-radius:5px;
    }
</style>