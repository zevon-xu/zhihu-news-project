<template>
  <div id="app">
    <m-header></m-header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import MHeader from '@/components/header/m-header'
export default {
  name: 'App',
  data () {
    return {
    }
  },
  components: {MHeader}
}
</script>

<style>
  * {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
  }
  #app {
    width: 750px;
    box-shadow: 0 0 20px rgba(0, 0, 0, .1);
    transform: translate(0, 0);
    overflow: hidden;
    margin: 0 auto;
  }
  main {
    margin-top: 70px;
  }
</style>
