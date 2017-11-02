<template>
  <div>
      <!-- 头部 -->
      <yd-navbar title="当年今日">
        <router-link to="/home" slot="left">
            <yd-navbar-back-icon></yd-navbar-back-icon>
        </router-link>
      </yd-navbar>
      <!-- 时间 -->
      <yd-flexbox-item class="dayTime">
          <!-- <p>今天是<span>asasasas</span></p> -->
          <!-- 倒计时 -->
        <yd-countdown time="2018/01/01 00:00:00">
            <span>距离2018年还有：</span>&nbsp;&nbsp;&nbsp;
            <span style="color:red;">{%d}<i>天</i></span>
            <span style="color:gray;">{%h}<i>时</i></span>
            <span style="color:blue;">{%m}<i>分</i></span>
            <span style="color:orange;">{%s}<i>秒</i></span>
        </yd-countdown>
      </yd-flexbox-item>
      <!-- 内容 -->
      <yd-accordion class="todayListCont">
        <yd-accordion-item :title="item.date|yearNew" v-for="(item,index) in list" :key="index" class="listDay">
            <h2>{{item.title}}</h2>
            <p><span>新闻时间：</span>{{item.date}}</p>
            <a :href="item.link">
                <img :src="item.image">
            </a>
            <span class="spenTack">温馨提示：点击图片可查看具体新闻</span>
        </yd-accordion-item>
    </yd-accordion>
  </div>
</template>

<style>
.dayTime {
  background: #fff;
  text-align:center;
}

/* 内容 */
.todayListCont{
    margin-top: 0.3rem;
}
/* 内容处理 */
.listDay h2{
    text-align: center;
    font-size: 0.5rem;
}
.listDay p{
    margin: 0.3rem;
    text-align: center;
}
.listDay a {
    text-align: center;
    display: block;
    width: 100%;
    height: 100%;
}
.listDay a img{
    width: 80%;
    height: 80%;
}
.listDay .spenTack {
    display: block;
    margin:0.2rem;
    color: red;
}
</style>

<script>
export default {
  data() {
      return {
          list:[]
      }
  },
  created(){
      this.todayList()
  },
  filters:{
    //   过滤器，处理年份
    yearNew:function(value){
        return value.substring(0,5)
    }
  },
  methods:{
      todayList(){
          const dayUrl="https://api.asilu.com/today/todayonhistory/"
          this.$http.jsonp(dayUrl).then(response=>{
              this.list=response.body.list
          })
      }
  }
};
</script>


