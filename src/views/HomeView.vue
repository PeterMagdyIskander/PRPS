<template>
  <div class="home">
    <div class="header">
      <h1 class="header-title">
        Unlock Your Potential with Expert Guidance
      </h1>
      <h1 class="header-subtitle">
        Match with a mentor who is not only aligned with your goals but also committed to helping you navigate the
        challenges and opportunities in your career journey.
      </h1>
      <button class="header-call-to-action">Get started</button>
      <img class="header-device" src="@/assets/images/device-mobile-view.svg" loading="eager" alt="device-mobile">
      <img class="header-shape" src="@/assets/images/shape-mobile-view.svg" loading="eager" alt="shape-mobile">
    </div>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
}

.header {
  background-image: linear-gradient(#0044F1, #4E7CF1);
  border-radius: 50px;
  padding: 60px 24px 0 24px;
  text-align: center;
  position: relative;
  overflow:hidden;
  &-title {
    font-family: 'ArchivoBlack-Regular';
    font-weight: 400;
    font-size: 32px;
    line-height: 34px;
    text-align: center;
    color: #fff;
    margin-bottom: 24px;
  }

  &-subtitle {
    font-family: 'Poppins-Regular';
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #fff;
    margin-bottom: 24px;
  }

  &-call-to-action {
    all: unset;
    cursor: pointer;
    border-radius: 12px;
    padding: 10px 24px 10px 24px;
    background-color: #fff;
    font-family: 'Poppins-Regular';
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #0044F1;
  }

  &-device {
    margin-top: -20px;
    position: relative;
    z-index: 1;
  }
  &-shape {
    position: absolute;
    z-index: 0;
    bottom: -125px;
    right: -50px;
  }
}
</style>
