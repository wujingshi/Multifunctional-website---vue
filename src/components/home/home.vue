<template>
  <div>
      <!-- 头部 -->
        <yd-navbar title="我是头部" ></yd-navbar>
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
        <yd-grids-item>
            <img slot="icon" src="http://static.ydcss.com/ydui/img/logo.png">
            <span slot="text">随机音乐</span>
        </yd-grids-item>
        <yd-grids-item link="/nba">
            <img slot="icon" src="http://static.ydcss.com/ydui/img/logo.png">
            <span slot="text">NBA赛事</span>
        </yd-grids-item>
        <yd-grids-item>
            <img slot="icon" src="http://static.ydcss.com/ydui/img/logo.png">
            <span slot="text">image</span>
        </yd-grids-item>
        <yd-grids-item>
            <img slot="icon" src="http://static.ydcss.com/ydui/img/logo.png">
            <span slot="text">iconfont</span>
        </yd-grids-item>
        <yd-grids-item>
            <img slot="icon" src="http://static.ydcss.com/ydui/img/logo.png">
            <span slot="text">image</span>
        </yd-grids-item>
        <yd-grids-item>
            <img slot="icon" src="http://static.ydcss.com/ydui/img/logo.png">
            <span slot="text">iconfont</span>
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
    .yd-grids-2{
        margin-top: 0.5rem;
    }
    /* .yd-grids-item{
        font-size: 0.8rem;
    }
    .yd-grids-icon{
        height: 4rem;
    } */
    /* 头部 */
  /* .yd-navbar-center-box{
    height: 2rem !important;
    font-size: 1rem;
    line-height: 1rem;
  } */
</style>


<style scoped>
    /* 公告图片 */
    .rollImg{
        position: absolute;
        margin-top:6px;
    }
    .rollImg img{
        height: 18px;
    }
    
</style>

