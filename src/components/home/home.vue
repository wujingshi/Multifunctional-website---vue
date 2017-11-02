<template>
  <div>
      <!-- 头部 -->
        <yd-navbar title="我是头部"></yd-navbar>
      <!-- 轮播 -->
      <yd-slider autoplay="3000">
        <yd-slider-item>
            <a href="http://www.ydcss.com">
                <img src="http://static.ydcss.com/uploads/ydui/1.jpg">
            </a>
        </yd-slider-item>
        <yd-slider-item>
            <a href="http://www.ydcss.com">
                <img src="http://static.ydcss.com/uploads/ydui/2.jpg">
            </a>
        </yd-slider-item>
        <yd-slider-item>
            <a href="http://www.ydcss.com">
                <img src="http://static.ydcss.com/uploads/ydui/3.jpg">
            </a>
        </yd-slider-item>
        </yd-slider>
      <!-- 公告 -->
        <!-- 公告图片 -->
        <div class="rollImg">
            <img src="../../assets/img/news-tit.png">
        </div>
        <!-- 集成git -->
      <!-- <div class="gitHub">
          <a :href="git.html_url">
              <img src="../../assets/img/github.png">
              Star
          </a>
      </div> -->
        <!-- 公告内容 -->
      <yd-rollnotice autoplay="2000">
        <yd-rollnotice-item>
            <span style="color:#F00;"> 强烈推荐： </span>
            吴静施自学vue居然成功啦！
        </yd-rollnotice-item>
        <yd-rollnotice-item>
            <span style="color:#F00;"> 推荐: </span>
            据说点赞的人都是很善良的人！
        </yd-rollnotice-item>
        <yd-rollnotice-item>
            <span style="color:#F00;"> 推荐: </span>
            欢迎来到本网站，觉得好请分享呗
        </yd-rollnotice-item>
      </yd-rollnotice>
      <!-- 内容 -->
      <yd-grids-group :rows="2">
        <yd-grids-item link="/music">
            <img slot="icon" src="../../assets/img/music.jpg">
            <span slot="text">随机音乐</span>
        </yd-grids-item>
        <yd-grids-item link="/nba">
            <img slot="icon" src="../../assets/img/nba.jpg">
            <span slot="text">NBA赛事</span>
        </yd-grids-item>
        <yd-grids-item link="/today">
            <img slot="icon" src="http://static.ydcss.com/ydui/img/logo.png">
            <span slot="text">当年今日</span>
        </yd-grids-item>
        <yd-grids-item link="/today">
            <img slot="icon" src="http://static.ydcss.com/ydui/img/logo.png">
            <span slot="text">今日</span>
        </yd-grids-item>
      </yd-grids-group>
  </div>
</template>

<style>
/* 公告 */
.yd-rollnotice-align-left {
  padding-left: 90px;
}
/* 内容 */
.yd-grids-2 {
  margin-top: 0.5rem;
}
</style>


<style scoped>
/* 公告图片 */
.rollImg {
  position: absolute;
  margin-top: 6px;
}
.rollImg img {
  height: 18px;
}
/* github */
/* .gitHub{
    position: absolute;
    background:black;
    right: 3px;
    width:1.3rem;
    height: 0.51rem;
    border-radius:10px;
    color:#fff;
    font-size:0.3rem;
}
.gitHub a{
    width:1.3rem;
    height: 0.51rem;
    display:inline-block;
    line-height: 0.51rem;
    
} */
</style>


<script>
export default {
  data(){
      return {
          git:[]
      }
  },
  mounted(){

  },
  created(){
      this.gitCommn()
  },
  methods:{
      gitCommn(){
          const gitUrl="https://api.github.com/repos/wujingshi/Multifunctional-website---vue"
          this.$http.get(gitUrl).then(response=>{
              this.git=response.body
          })
      }
  }
}
</script>


