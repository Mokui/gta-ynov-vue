<template>
  <div class="login">
    <Menu/>
    <Connection/>
  </div>
</template>

<script>
// @ is an alias to /src
import Menu from "@/components/Menu.vue";
import Connection from "@/components/Connection.vue";

export default {
  name: "login",
  components: {
    Menu,
    Connection
  }
};
</script>