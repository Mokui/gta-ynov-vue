<template>
  <div class="home">
    <Salary msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Salary from "@/components/Salary.vue";
import json from '../data/data.json'

export default {
  name: "home",
  components: {
    Salary
  },
  created() {
    // console.log(this.$store.getters.user_connected);
    
    if (this.$store.getters.user_connected.id_user == null || this.$store.getters.user_connected.id_user == undefined ) {
      this.$router.push({'path': '/'});
    }
  }
};
</script>
