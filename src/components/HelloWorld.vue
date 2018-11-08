<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <!-- Using components -->
    <b-input-group prepend="Username">
      <b-form-input  v-model="choosenUser" type="text" placeholder="Enter your name"></b-form-input>
      <b-input-group-append>
        <b-btn variant="info">Aller</b-btn>
      </b-input-group-append>
    </b-input-group>
  </div>
</template>

<script>
import json from '../data/data.json'

export default {
  data(){
    return{
      users: json,
      choosenUser: ''
    }
  },
  name: "HelloWorld",
  props: {
    msg: String,
  },
  created(){
    console.log(this.users);
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
