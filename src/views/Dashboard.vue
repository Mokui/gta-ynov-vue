<template>
  <div class="dashboard">
    <Menu/>
    <Graphics/>
  </div>
</template>

<script>
// @ is an alias to /src
import Menu from "@/components/Menu.vue";
import Graphics from "@/components/Graphics.vue";

export default {
  name: "dashboard",
  components: {
    Menu,
    Graphics
  }
};
</script>
