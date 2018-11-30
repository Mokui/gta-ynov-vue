<template>
  <div class="connection">
    <GChart type="ColumnChart" :data="chartData" :options="chartOptions"/>
    <GChart type="ColumnChart" :data="DaychartData" :options="DaychartOptions"/>
    <b-container>
      <b-row>
        <b-col cols="5"></b-col>
        <b-col cols="2">
          <GChart
            :settings="{ packages: ['table'] }"
            type="Table"
            :data="tableData"
            :options="tableOptions"
            :events="chartEvents"
            ref="gChart"
            id="tablepart"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import json from "../data/data.json";

export default {
  data() {
    return {
      chartData: [
        ["type", "2015", "2016", "2017"],
        ["congé", 25, 25, 25],
        ["rtt", 12, 10, 4],
        ["maladie", 5, 0, 20]
      ],
      chartOptions: {
        chart: {
          title: "Company Performance",
          subtitle: "Sales, Expenses, and Profit: 2014-2017"
        }
      },
      DaychartData: [
        ["type", "2015", "2016", "2017"],
        ["jour travaillé", 258, 253, 255]
      ],
      DaychartOptions: {
        chart: {
          title: "Company Performance",
          subtitle: "Sales, Expenses, and Profit: 2014-2017"
        }
      },
      tableData: [
        [
          { type: "string", label: "type", id: "type" },
          { type: "string", label: "restant", id: "restant" },
          { type: "string", label: "utilise", id: "utilise" }
        ],
        ["rtt", "12", "2"],
        ["vacances", "25", "25"],
        ["congé maladie", "1", "1"]
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
#tablepart {
  width: 100%;
}
</style>