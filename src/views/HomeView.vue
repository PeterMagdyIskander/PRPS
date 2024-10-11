<template>
  <div>
    <LandingPageView v-if="getUser===null"></LandingPageView>
    <LoggedInView v-else></LoggedInView>
  </div>
</template>

<script>

import { mapGetters } from 'vuex';
import LandingPageView from './LandingPageView.vue';
import LoggedInView from './LoggedInView.vue';
export default {
  name: 'HomeView',
  components: {LandingPageView,LoggedInView
  },
  computed: mapGetters(['getUser']),
  data() {
    return {
      
    }
  },
  methods: {
  
  }
}
</script>
<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
}

</style>
