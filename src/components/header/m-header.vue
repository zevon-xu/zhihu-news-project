<template>
  <header>
        <router-link class="logo" to="/"><img src="../../assets/logo.jpg" alt="知乎日报"></router-link>
  </header>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>
<style scoped>
  header {
    position: fixed;
    top: 0;
    left: 50%;
    width: 750px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transform: translateX(-50%);
    border-bottom: 1px solid #e5e5e5;
    padding: 0 10px;
  }
  .logo {
    font-size: 0;
  }
  .nav-box .nav {
    font-size: 14px;
    color: #333;
    display: inline-block;
    transition: color .3s;
    padding: 10px;
  }
  .nav-box .nav:hover {
    color: #008bed;
  }
</style>
