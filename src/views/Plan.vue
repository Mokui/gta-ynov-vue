<template>
  <div class="plan">
    <Menu/>
    <Calendar msg="You can plan by clicking on the '+' button at right below"></Calendar>
  </div>
</template>

<script>
// @ is an alias to /src
import Menu from "@/components/Menu.vue";
import Calendar from "@/components/Calendar.vue";

export default {
  name: "plan",
  components: {
    Menu,
    Calendar
  }
};
</script>
