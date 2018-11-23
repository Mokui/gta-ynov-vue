<template>
  <div class="home">
    <Menu/>
    <Salary msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Menu from "@/components/Menu.vue";
import Salary from "@/components/Salary.vue";
import json from '../data/data.json'

export default {
  name: "home",
  components: {
    Menu,
    Salary
  }
};
</script>
