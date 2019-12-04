<template>
  <div class="home-page">
    <div class="banner-wrap">
    <div class="img-box">
      <img src="../../assets/phone_sample.png">
    </div>
    <div class="txt-box">
      <p class="title">{{title}}</p>
      <p class="detail">{{detail}}</p>
    </div>
  </div>
    <div class="news-wrap">
      <div class="news-title">{{newsTitle}}</div>
      <ul class="news-list">
        <li class="item" v-for="story in newsList" :key="story.id" @click="goThisNew(story.id)">
          <span class="title">{{story.title}}</span>
          <span class="img" v-for="(image, index) in story.images" :key="index" v-bind:style="{'background-image': 'url('+image+')'}"></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getNews, getMoreNews } from '@/api/news'
export default {
  name: 'homePage',
  data () {
    return {
      title: '每天三次' + '\n' + '每次七分钟',
      detail: '在中国，资讯类移动应用的人均阅读时长是 5 分钟，而在知乎日报，这个数字是 21。',
      newsTitle: '浏览内容',
      newsList: []
    }
  },
  mounted () {
    getNews().then((response) => {
      let stories = response.data.stories
      this.newsList = stories
    })
    this.scroll(this.persons)
  },
  methods: {
    goThisNew (id) {
      this.$router.push({
        name: 'articlePage',
        params: {
          id: id
        }
      })
    },
    scroll (person) {
      let isLoading = false
      let $date = new Date()
      window.onscroll = () => {
        // 距离底部200px时加载一次
        if (document.documentElement.scrollTop + window.innerHeight + 20 >= document.documentElement.scrollHeight && isLoading === false) {
          isLoading = true
          let year = $date.getFullYear()
          let month = $date.getMonth() + 1
          let date = $date.getDate() < 10 ? '0' + $date.getDate() : $date.getDate()
          getMoreNews(year + '' + month + '' + date).then(response => {
            let stories = response.data.stories
            for (var i in stories) {
              this.newsList.push(stories[i])
            }
            $date = new Date(+$date - (1000 * 60 * 60 * 24))
            isLoading = false
          })
        }
      }
    }
  }
}
</script>
<style scoped>
  .banner-wrap {
    background-color: #008bed;
    display: flex;
    align-items: center;
    padding: 20px 20px 0;
  }
  .img-box {
    font-size: 0;
    margin-right: 15px;
  }
  .txt-box .title {
    font-size: 32px;
    color: #fff;
    line-height: 1.5em;
    white-space: pre-wrap;
    margin: 0 0 10px;
  }
  .txt-box .detail {
    font-size: 16px;
    color: #99d1f8;
    line-height: 1.5em;
    margin: 0;
  }
  .news-wrap {
    padding: 20px;
  }
  .news-wrap .news-title {
    font-size: 25px;
    color: #333;
    line-height: 1.5em;
    margin: 20px 0 40px;
  }
  .news-wrap .news-list {
    padding-left: 0;
  }
  .news-wrap .item {
    width: 100%;
    list-style: none;
    display: flex;
    border-bottom: 1px solid #e5e5e5;
    cursor: pointer;
    padding-bottom: 20px;
    margin-bottom: 20px;
  }
  .news-wrap .item span {
    display: block;
  }
  .news-wrap .item .img {
    width: 100px;
    height: 100px;
    border-radius: 4px;
    background-size: cover;
    background-position: center;
    overflow: hidden;
    margin-left: 20px;
  }
  .news-wrap .item .title {
    font-size: 14px;
    color: #333;
    line-height: 1.5em;
    flex: 1;
  }
</style>
