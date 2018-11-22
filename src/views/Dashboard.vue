<template>
  <div class="dashboard">
      <p>Welcome to the dashboard</p>
      <GChart type="ColumnChart" :data="chartData" :options="chartOptions"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Salary from "@/components/Salary.vue";
import { GChart } from "vue-google-charts";

export default {
  name: "dashboard",
  components: {
    GChart
  }
};
</script>
