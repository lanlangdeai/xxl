<template>
  <div id="app">
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }

</script>

<style>
  /*淡化*/
  
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .3s
  }
  
  .fade-enter,
  .fade-leave-to {
    opacity: 0
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