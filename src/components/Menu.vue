<template>
    <div id="menu_bar">
        <b-navbar toggleable="md" type="dark" variant="info">
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-navbar-brand v-on:click="homer()">NavBar</b-navbar-brand>
        <b-collapse is-nav id="nav_collapse">
            <b-navbar-nav>
            <b-nav-item v-on:click="homer()">Index</b-nav-item>
            <b-nav-item v-on:click="dashborder()">Dashboard</b-nav-item>
            <b-nav-item v-on:click="planer()">Planning</b-nav-item>
            </b-navbar-nav>
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown right>
                <!-- Using button-content slot -->
                <template slot="button-content">
                <em>User</em>
                </template>
                <b-dropdown-item href="/" to="/">Signout</b-dropdown-item>
            </b-nav-item-dropdown>
            </b-navbar-nav>
        </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {
  name: "Menu",
  props: {},
  methods: {
    homer() {
      return this.$router.push({
        name: "home",
        params: { userId: this.$store.getters.user_connected.id_user }
      });
    },
    dashborder() {
      return this.$router.push({
        name: "dashboard",
        params: { userId: this.$store.getters.user_connected.id_user }
      });
    },
    planer() {
      return this.$router.push({
        name: "plan",
        params: { userId: this.$store.getters.user_connected.id_user }
      });
    }
  }
};
</script>