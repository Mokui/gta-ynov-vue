<template>
  <div class="dashboard">
    <Menu/>
<<<<<<< HEAD
      <Graphics/>
=======
    <p>Welcome to the dashboard</p>
    <Graphics/>
>>>>>>> 73f814eb530ed1345977535c1ec5fe7dcfedb02c
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
