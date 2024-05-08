<template>
  <div class="page-test">
    <van-tree-select
      v-model:active-id="activeId"
      v-model:main-active-index="activeIndex"
      :items="items"
      height="300"
    />
    <van-skeleton title :row="3" />
    <van-button type="primary" @click="handleMock">请求接口</van-button>
    <router-link to="/home">首页</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { getTree } from "@/apis/test";
import { transTreeSelect } from "@/utils/format";
import "./test.scss";

export default defineComponent({
  setup() {
    const activeId = ref("");
    const activeIndex = ref("");

    let items = ref([]);

    const handleMock = () => {
      getTree()
        .then((res) => {
          console.log("🚀 ~ .then ~ res:", res);
          items.value = transTreeSelect(res.data, {
            text: "name",
            id: "code",
          });
        })
        .catch((err) => {
          console.log("🚀 ~ handleMock ~ err:", err);
        });
    };

    handleMock();

    return {
      items,
      activeId,
      activeIndex,
      handleMock,
    };
  },
});
</script>
