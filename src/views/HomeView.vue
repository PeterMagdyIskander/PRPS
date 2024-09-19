<template>
  <div class="home">
    <div class="header">
      <div class="show-down-animation">
        <h1 class="header-title">
          Unlock Your Potential with Expert Guidance
        </h1>
        <h1 class="header-subtitle">
          Match with a mentor who is not only aligned with your goals but also committed to helping you navigate the
          challenges and opportunities in your career journey.
        </h1>
        <button class="header-call-to-action" @click="reroute()">Get started</button>
      </div>
      <div class="show-up-animation">

        <img class="header-device" src="@/assets/images/Rectangle.png" loading="eager" alt="mobile-img">
        <img class="header-shape" src="@/assets/images/shape-mobile-view.svg" loading="eager" alt="shape-mobile">
      </div>
    </div>
    <Vue3Marquee class="imgs-marquee">
      <img src="@/assets/images/logos0.svg" />
      <img src="@/assets/images/logos1.svg" />
      <img src="@/assets/images/logos2.svg" />
      <img src="@/assets/images/logos3.svg" />
      <img src="@/assets/images/logos4.svg" />
      <img src="@/assets/images/logos5.svg" />
      <img src="@/assets/images/logos6.svg" />
      <img src="@/assets/images/logos7.svg" />
      <img src="@/assets/images/logos8.svg" />
      <img src="@/assets/images/logos9.svg" />
      <img src="@/assets/images/logos10.svg" />
      <img src="@/assets/images/logos11.svg" />
      <img src="@/assets/images/logos12.svg" />
      <img src="@/assets/images/logos13.svg" />
      <img src="@/assets/images/logos14.svg" />
      <img src="@/assets/images/logos15.svg" />
      <img src="@/assets/images/logos16.svg" />
    </Vue3Marquee>
    <div class="separator">
      <img src="@/assets/images/prps-logo.svg" alt="prps-logo">
      <h1 class="separator-title">Customer journey</h1>
    </div>
    <div class="journey">

    </div>
    <div class="separator">
      <img src="@/assets/images/prps-logo.svg" alt="prps-logo">
      <h1 class="separator-title">Meet Our Experts</h1>
    </div>
    <Vue3Marquee :animate-on-overflow-only="true" :pause-on-click="true">
      <ExpertCard></ExpertCard>
      <ExpertCard></ExpertCard>
      <ExpertCard></ExpertCard>
      <ExpertCard></ExpertCard>
    </Vue3Marquee>
    <div class="journey">

    </div>
  </div>
</template>

<script>

import router from '@/router'
import { mapGetters } from 'vuex';
import { Vue3Marquee } from 'vue3-marquee'
import ExpertCard from '@/components/ExpertCard.vue';
export default {
  name: 'HomeView',
  components: {
    Vue3Marquee,
    ExpertCard
  },
  computed: mapGetters(['getUser']),
  data() {
    return {
      imgs: [
        '@/assets/images/logos1.svg'
      ]
    }
  },
  methods: {
    getImage(imagePath) {
      return require(imagePath);
    },
    reroute() {
      router.push(`/login`)
    }
  }
}
</script>
<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
}

.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
}

.header {
  width: 100%;
  box-sizing: border-box;
  background-image: linear-gradient(#0044F1, #4E7CF1);
  border-radius: 50px;
  padding: 60px 24px 0 24px;
  text-align: center;
  position: relative;
  overflow: hidden;

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
    border: unset;
    border-radius: 12px;
    padding: 10px 24px 10px 24px;
    background-color: #fff;
    font-family: 'Poppins-Regular';
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    margin: 0 auto;
    color: #0044F1;
  }

  &-device {
    width: 100%;
    max-width: 342px;
    object-fit: contain;
    margin-top: -20px;
    position: relative;
    z-index: 1;
  }

  &-shape {
    position: absolute;
    z-index: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: 0 auto;
    min-width: 469px;
    width: 100%;
    max-width: 969px;

    @media(max-width: 390px) {
      left: -70px;
    }
  }

}

.imgs-marquee {

  margin: 60px 0 44px 0;

  img {
    height: 30px;
    margin: 0 12px;
  }

  :deep(.marquee) {
    justify-content: space-evenly;
  }
}

.separator {
  display: flex;
  align-items: center;
  column-gap: 8px;
  margin: 16px 0;

  &-title {
    font-family: 'ArchivoBlack-Regular';
    color: #0044F1;
    font-weight: 400;
    font-size: 24px;
  }
}

.journey {
  width: 100%;
  height: 780px;
  box-sizing: border-box;
  border-radius: 50px;
  background-color: #F6F6F6;
  margin-bottom: 44px;
}

.show-up-animation {
  animation: autoShowUpAnimation 1000ms;
}

@keyframes autoShowUpAnimation {
  from {
    opacity: 0;
    transform: translateY(200px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.show-down-animation {
  animation: autoShowDownAnimation 1000ms;
}

@keyframes autoShowDownAnimation {
  from {
    opacity: 0;
    transform: translateY(-200px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
