<template>
  <div>
    <div>临时登录页</div>
    <div @click="handleLogin">完成登录</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, unref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const { currentRoute, replace } = useRouter();
    const { query } = unref(currentRoute);

    const handleLogin = () => {
      replace({
        path: query.redirect as string,
        query: {
          accessKey: "000",
        },
      });
    };

    return { handleLogin };
  },
});
</script>
