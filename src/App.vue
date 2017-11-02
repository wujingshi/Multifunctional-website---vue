<template>
  <div>
     <yd-layout>

      <!-- 中间 -->
      <div style="height: 100%;">
        <router-view></router-view>
      </div>
      <!-- 底部 -->
        <yd-tabbar slot="tabbar" fixed>
            <yd-tabbar-item title="首页" link="home" active>
                <yd-icon name="home" slot="icon"></yd-icon>
            </yd-tabbar-item>
            <yd-tabbar-item title="购物车" link="music">
                <yd-icon name="shopcart-outline" slot="icon"></yd-icon>
            </yd-tabbar-item>
            <yd-tabbar-item title="个人中心" link="#">
                <yd-icon name="ucenter-outline" slot="icon"></yd-icon>
            </yd-tabbar-item>
        </yd-tabbar>

    </yd-layout>
  </div>
</template>

<style>
/* .yd-tabbar-icon{
  height: 1.5rem;
} */
</style>
<script>
import "./assets/js/ydui.flexible.js";
</script>

