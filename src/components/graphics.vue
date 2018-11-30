<template>
  <div class="connection">
    <GChart
      type="ColumnChart"
      :data="chartData"
      :options="chartOptions"
    />
    <GChart
      :settings="{ packages: ['table'] }"
      type="Table"
      :data="tableData"
      :options="tableOptions"
      :events="chartEvents"
      ref="gChart"
    />  
  </div>
</template>

<script>
import json from "../data/data.json"; 

export default {
  data() {
    return {
      chartData: [
        ['Year', 'Sales', 'Expenses', 'Profit'],
        ['2014', 1000, 400, 200],
        ['2015', 1170, 460, 250],
        ['2016', 660, 1120, 300],
        ['2017', 1030, 540, 350]
      ],
      chartOptions: {
        chart: {
          title: "Company Performance",
          subtitle: "Sales, Expenses, and Profit: 2014-2017"
        }
      },
      tableData: [
        [
          { type: "string", label: "President", id: "President" },
          { type: "date", label: "From", id: "From" },
          { type: "date", label: "To", id: "To" }
        ],
        ["Washington", new Date(1789, 3, 30), new Date(1797, 3, 4)],
        ["Adams", new Date(1797, 2, 4), new Date(1802, 2, 4)],
        ["Jefferson", new Date(1801, 2, 4), new Date(1809, 2, 4)]
      ],
      tableOptions: {
        chart: {
          title: "Company Performance",
          subtitle: "Sales, Expenses, and Profit: 2014-2017"
        }
    }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>