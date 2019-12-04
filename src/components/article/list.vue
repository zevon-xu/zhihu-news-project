<template>
  <div class="news-content">
    <div class="banner">
      <span class="img" :style="{'background-image': 'url('+this.data.image+')'}"></span>
      <h1 class="title">{{this.data.title}}</h1>
    </div>
    <div class="news-body" v-html="this.data.body"></div>
  </div>
</template>

<script>
import { geNewsContent } from '@/api/news'
export default {
  name: 'articlePage',
  data () {
    return {
      data: {},
      msg: '文章页面'
    }
  },
  mounted () {
    geNewsContent(this.$route.params.id).then((response) => {
      this.data = response.data
    })
  }
}
</script>
<style scoped>
  .news-content {
  }
  .banner {
    position: relative;
  }
  .banner:after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 80%;
    background: linear-gradient(0, rgba(0, 0, 0, .6), transparent);
  }
  .banner .img {
    width: 100%;
    height: 418px;
    background-size: cover;
    background-position: center;
    overflow: hidden;
    display: block;
  }
  .banner .title {
    font-size: 28px;
    color: #fff;
    line-height: 1.5em;
    position: absolute;
    bottom: 40px;
    left: 40px;
    right: 40px;
    z-index: 2;
    margin: 0;
  }
  .news-body {
    padding: 0 40px;
  }
  .news-body .view-more {
    text-align: right;
  }
  a {
    color: #698ebf!important;
    font-size: 14px!important;
  }
</style>
