<template>
  <div>
    <div>关于我们</div>
    <div @click="handleHome">返回首页</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const router = useRouter();

    const handleHome = () => {
      router.push("/home");
    };

    return { handleHome };
  },
});
</script>
