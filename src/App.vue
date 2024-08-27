<template>
  <router-view />
</template>

<script>

import { mapGetters, mapActions } from 'vuex';
import { initialize } from '@/firebase';
const { firebaseApp, firestore, auth } = initialize();
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
