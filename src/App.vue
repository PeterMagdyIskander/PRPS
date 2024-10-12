<template>
  <router-view />
</template>

<script>

import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      navOpen: false,
    }
  }, methods: {
    closeMenu() {
      this.navOpen = false;
    }
  },
  computed: mapGetters(['getUser',]),
}
</script>
<style lang="scss">
html,
body {
  height: 100%;
}
#app {
  height: 100%;
  position: relative;
}

</style>
