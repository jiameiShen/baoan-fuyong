<template>
  <div class="page-home">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
    <!-- <van-skeleton title :row="3" /> -->
    <div>首页</div>
    <router-link to="/aboutus"> 跳转关于我们 </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getList } from "@/apis/home";
import "./home.scss";

export default defineComponent({
  setup() {
    getList({ id: 2 });
  },
});
</script>
