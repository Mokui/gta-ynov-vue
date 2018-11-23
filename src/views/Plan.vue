<template>
  <div class="plan">
      <Menu/>
      <p>Welcome to the planing interface</p>
  </div>
</template>

<script>
// @ is an alias to /src
import Menu from "@/components/Menu.vue";

export default {
  name: "plan",
  components: {
    Menu,
  }
};
</script>
