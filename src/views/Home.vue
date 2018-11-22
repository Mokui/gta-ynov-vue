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
  }
};
</script>
