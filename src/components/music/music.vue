<template>
  <div>
      <!-- 头部 -->
      <yd-navbar title="随机音乐">
        <router-link to="/home" slot="left">
            <yd-navbar-back-icon></yd-navbar-back-icon>
        </router-link>
      </yd-navbar>
      <!-- 音乐播放器 -->
      <div class="music">
          <img src="../../assets/img/musicPlay.jpg">
      </div>
      <!-- 音乐名字 -->
        <div class="songName">
            <span>正在播放:</span>
            <h3>{{musicList.name}}</h3>
            <p>歌词暂未找到</p>
        </div>
      <!-- 切歌 -->
      <a @click="musicPlay()" id="musicPlayButton">随机来一首</a>
      <audio :src="musicList.url" @ended="musicEnd()" autoplay ></audio>
  </div>
</template>

<style scoped>
.music {
  margin-top: 1rem;
  text-align: center;
}
.music img {
  width: 5rem;
  height: 5rem;
}
/* 音乐名字 */
.songName {
  margin-top: 0.5rem;
  text-align: center;
  border: 1px solid #000;
  border-radius: 20px;
  height: 3rem;
  background-color: #fff;
}
.songName span {
  margin-left: -2rem;
  font-size: 0.3rem;
}
.songName h3 {
  margin: 0.3rem;
  font-size: 0.5rem;
  color: hotpink;
}
/* 音乐按钮 */
#musicPlayButton{
    display: block;
    margin-top:0.3rem;
    height: 1rem;
    line-height: 1rem;
    background-color: green;
    border-radius:15px;
    font-size:0.5rem;
    text-align:center;
    color:#fff;
}
</style>

<script>
export default {
  data() {
    return {
      musicNum:0,
      musicList: [],
      wgList: [
        {
          name: "老鼠爱大米---香香",
          url: "http://url.527578.com/xiami.php/1796398649.mp3"
        },
        {
          name: "千年之恋---FIR",
          url: "http://url.527578.com/kuwo.php/175554.mp3"
        },
        {
          name: "简单爱---周杰伦",
          url: "http://url.527578.com/kuwo.php/156522.mp3"
        },
        {
          name: "我的天空---南征北战",
          url: "http://url.527578.com/xiami.php/1772152245.mp3"
        },
        {
          name: "告白气球---周杰伦",
          url: "http://url.527578.com/kuwo.php/7149583.mp3"
        },
        {
          name: "通关---许嵩",
          url: "http://url.527578.com/xiami.php/1796030097.mp3"
        },
        {
          name: "今天你要嫁给我---蔡依林/陶喆",
          url: "http://url.527578.com/qq.php/145881.mp3"
        },
        {
          name: "let it go---idina menzel",
          url: "http://url.527578.com/kuwo.php/5907267.mp3"
        },
        {
          name: "第一天---孙燕姿",
          url: "http://url.527578.com/kuwo.php/117839.mp3"
        },
        {
          name: "我的歌声里---曲婉婷",
          url: "http://url.527578.com/kuwo.php/1133132.mp3"
        },
        {
          name: "后来---刘若英",
          url: "http://url.527578.com/xiami.php/130762.mp3"
        },
        {
          name: "I Really Like You---Carly Rae Jepsen",
          url: "http://url.527578.com/xiami.php/1774025101.mp3"
        },
        {
          name: "my all---浜崎あゆみ",
          url: "http://url.527578.com/kuwo.php/349208.mp3"
        }
      ]
    };
  },
  mounted(){
      this.musicPlay()
  },
  methods: {
      musicPlay(){
          console.log("点击了")
          this.musicList=[]
          // 判断是否和音乐列表相同
      if (this.musicNum >= this.wgList.length) {
        // 如果相同就回到开头
        this.musicNum = 0;
        // 把获取下标的内容发给新数组进行渲染
        this.musicList = this.wgList[this.musicNum];
      } else {
        this.musicList = this.wgList[this.musicNum];
        this.musicNum++;
      }
    },
    // 音乐播放完执行函数
    musicEnd() {
      // 音乐结束执行这个函数
      this.musicPlay();
    }
    }
  }
</script>


