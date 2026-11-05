<template>
  <div id="app">
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup>
</script>

<style>
/* 移动端 rem 基准：750 设计稿下 1rem = 100px，等价 vw 方案 */
html {
  font-size: 13.333333vw;
}

/*淡化*/
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

#app {
  width: 100%;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

input,
button {
  border: none;
  outline: none;
}

button {
  font-size: 16px;
}

a {
  text-decoration: none;
  color: #aaa;
}

li {
  list-style-type: none;
}
</style>
