<template>
  <div>
      <!-- 头部 -->
      <yd-navbar title="NBA">
        <router-link to="/home" slot="left">
            <yd-navbar-back-icon></yd-navbar-back-icon>
        </router-link>
      </yd-navbar>
      <!-- 轮播 -->
      <yd-slider autoplay="3000">
        <yd-slider-item>
            <a href="https://xw.qq.com/cmsid/NBA2017110101829105">
                <img src="http://inews.gtimg.com/newsapp_ls/0/2232492337_870492/0">
            </a>
        </yd-slider-item>
        <yd-slider-item>
          <a href="https://xw.qq.com/cmsid/NBA2017110200951419">
                <img src="http://inews.gtimg.com/newsapp_ls/0/2237042013_870492/0">
          </a>
        </yd-slider-item>
        </yd-slider>
      <!-- 内容 -->
      <yd-tab>
        <yd-tab-panel label="赛程" active @click='Schedule()'>
          <!-- 比赛信息 -->
          <yd-cell-group :title="item.title"  v-for="(item,index) in teamSchedule" :key="index">
            <yd-cell-item v-for="(list,index) in (item.tr)" :key="index">
              <span slot="left" style="color:rgba(0,0,0,.3)">
                <p>{{list.time|evenTime}}</p>
                <p v-if="list.status==0">未开赛</p>
                <p v-else-if="list.status==1">直播中</p>
                <p v-else-if="list.status==2">已结束</p>
                <p v-else>无信息</p>
              </span>
              <span slot="right">
                <tr>
                  <td><img :src="list.player1logo"></td>
                  <td>{{list.player1}}</td>
                  <td>{{list.score}}</td>
                  <td>{{list.player2}}</td>
                  <td><img :src="list.player2logo"></td>
                  <td><a :href="list.link2url" class="jstjFont">数据</a></td>
                </tr>
              </span>
            </yd-cell-item>
        </yd-cell-group>
        </yd-tab-panel>
        <yd-tab-panel label="球队赛程查询（未开通）">球队赛程查询（未开通）</yd-tab-panel>
      </yd-tab>
  </div>
</template>

<style>
.yd-cell-title {
  text-align: center;
}
</style>
<style scoped>
.yd-cell-right img {
  width: 40px;
  height: 40px;
  vertical-align: middle;
}
.yd-cell-right .jstjFont {
  display: inline-block;
  height: 0.6rem;
  width: 1.2rem;
  /* color:rgba(0,0,0,.3); */
  text-align: center;
  line-height: 0.6rem;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}
.yd-cell-right td {
  width: 1.2rem;
}
</style>


<script>
export default {
  data() {
    return {
      teamSchedule: []
      // gameOpenTime:[]
    };
  },
  mounted() {
    this.Schedule();
  },
  filters: {
    // 过滤器，处理返回数据字符串问题
    evenTime: function(value) {
      if (!value) return "";
      return value.substring(5);
    }
  },
  methods: {
    // 点击传送数据
    Schedule() {
      const nbaUrl =
        "http://op.juhe.cn/onebox/basketball/nba?key=870bf2d719834f930a1a86d8d3dbf14d";
      this.$http.jsonp(nbaUrl).then(response => {
        this.teamSchedule = response.body.result.list;
        // this.gameOpenTime=response.body.result.statuslist;
      });
    }
  }
};
</script>

