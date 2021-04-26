<template>
  <div class="container-fluid"></div>
</template>

<script>
import { reactive } from "vue";

export default {
  name: "HomePage",
  setup() {
    const state = reactive({
      query: "",
    });
    return {
      state,
    };
  },
  components: {},
};
</script>
