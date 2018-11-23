<template>
  <div id="app">

    <router-view />

    <!-- Footer -->
    <Footer color="blue" class="font-small pt-4 mt-4" id="footer_bullshit">
      <div class="footer-copyright text-center py-3">
        <b-container fluid>
          &copy; 2018 Copyright: <router-link to="/about">About</router-link>
        </b-container>
      </div>
    </Footer>
    <!-- Footer -->

  </div>
</template>
<script>
import 'vuetify/dist/vuetify.min.css'

export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      //
    }
  }
}
</script>

<script>
  export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss">
#footer_bullshit {
    position: fixed;
    height: 100px;
    bottom: 0;
    width: 100%;
}
</style>
