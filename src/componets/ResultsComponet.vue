<template>
  <div class="results"></div>
</template>
<script>
import { reactive } from "vue";
export default {
  name: "results",
  setup() {
    const state = reactive({});
    return {
      state,
    };
  },
};
</script>