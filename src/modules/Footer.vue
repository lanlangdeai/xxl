<template>
    <div class="app-footer">
        <router-link class="footer-item" to="Homepage">
            <i class="iconfont footer-icon" :class="[homepageClass[active==0?1:0]]"></i>
        </router-link>
        <router-link class="footer-item" to="Add">
            <i class="iconfont footer-icon" :class="[addClass[active==1?1:0]]"></i>
        </router-link>
        <router-link class="footer-item" to="Collect">
            <i class="iconfont footer-icon" :class="[collectClass[active==2?1:0]]"></i>
        </router-link>
        <router-link class="footer-item" to="My">
            <i class="iconfont footer-icon" :class="[myClass[active==3?1:0]]"></i>
        </router-link>
    </div>

</template>

<script>
    export default {
        name: 'AppFooter',
        props: ['active'],
        data() {
            return {
                homepageClass: ['icon-zhuye1', 'icon-zhuye'],
                addClass: ['icon-jiahao1', 'icon-jiahao'],
                myClass: ['icon-wode2', 'icon-wode-1'],
                collectClass: ['icon-shoucang', 'icon-redshoucang']
            }
        }
    }

</script>
<style>
    .app-footer {
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 10;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 1rem;
        background: #fff;
        box-shadow: 0px -1px 0px 1px #dfdfdf;
    }
    
    .footer-item {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        color: #fff;
    }
    /*.app-footer i{
        font-size:0.65rem;
    }*/
    
    .footer-icon {
        font-size: 0.55rem;
    }
    
    .app-footer .footer-icon {
        color: #f893b4;
    }
</style>