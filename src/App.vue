<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" variant="info">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand href="/">NavBar</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item href="/">Index</b-nav-item>
          <b-nav-item href="/dashboard" to="/dashboard">Dashboard</b-nav-item>
          <b-nav-item href="/plan" to="/plan">Planning</b-nav-item>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using button-content slot -->
            <template slot="button-content">
              <em>User</em>
            </template>
            <b-dropdown-item href="/login" to="/login">login</b-dropdown-item>
            <b-dropdown-item href="#">Signout</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <b-container fluid>
      <router-view />
    </b-container>

    <!-- Footer -->
    <Footer color="blue" class="font-small pt-4 mt-4">
      <div class="footer-copyright text-center py-3">
        <container fluid>
          &copy; 2018 Copyright: <router-link to="/about">About</router-link>
        </container>
      </div>
    </Footer>
    <!-- Footer -->

  </div>
</template>

<style lang="scss">
footer {
    position: fixed;
    height: 100px;
    bottom: 0;
    width: 100%;
}
</style>