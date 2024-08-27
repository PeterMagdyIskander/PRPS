<template>
  <div class="home">
    HELLO PRPS
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'HomeView',
  components: {
  },
  computed: mapGetters(['getUser']),
 
}
</script>
<style lang="scss" scoped>
.home {
  height: 100%;
}
</style>
