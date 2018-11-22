<template>
  <div class="plan">
    <Calendar msg="You can plan by clicking on the '+' button at right below"></Calendar>
  </div>
</template>

<script>
// @ is an alias to /src
import Calendar from "@/components/Calendar.vue";

export default {
  name: "plan",
  components: {
    Calendar
  }
};
</script>
