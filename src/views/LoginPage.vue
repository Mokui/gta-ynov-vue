<template>
  <div class="login">
      <Connection msg="Please connect using your name"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Connection from "@/components/Connection.vue";

export default {
  name: "login",
  components: {
    Connection
  }
};
</script>