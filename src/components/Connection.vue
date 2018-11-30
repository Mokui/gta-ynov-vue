<template>
  <div class="connection">
    <h1>Connexion</h1>
    <!-- Using components -->
    <b-input-group prepend="Login">
      <b-form-input v-model="choosenUser" type="text" placeholder="Entrez votre email"></b-form-input>
      <b-input-group-append>
        <b-btn variant="info" v-on:click="connexion">Connexion</b-btn>
      </b-input-group-append>
    </b-input-group>
  </div>
</template>

<script>
import json from "../data/data.json";

export default {
  data() {
    return {
      users: json,
      choosenUser: ""
    };
  },
  name: "Connection",
  props: {},
  mounted() {
    // console.log(this.users);
  },
  methods: {
    connexion() {
      for (const u of this.users) {
        if (u.email === this.choosenUser) {
          this.$store.commit("user_connected", u);
          return this.$router.push({
            name: "home",
            params: { userId: u.id_user }
          }); // home/:id_user
        } else {
          throw new Error("Invalid credentials");
        }
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.connection {
  margin: 10%;
}

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