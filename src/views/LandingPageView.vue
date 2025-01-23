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
      <object class="header-device show-up-animation" type="image/svg+xml"
        :data="require('@/assets/images/iphone-picture-landing-header.svg')"></object>

      <img class="header-shape show-up-animation" src="@/assets/images/shape-mobile-view.svg" loading="eager"
        alt="shape-mobile">
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
      <h1 class="separator-title">How to use</h1>
    </div>

    <swiper pagination>
      <swiper-slide v-for="(item, index) in howToUse" :key="index">
        <HowToUseCard :index="index" :slide="item">

        </HowToUseCard>
      </swiper-slide>
    </swiper>


    <div class="separator">
      <img src="@/assets/images/prps-logo.svg" alt="prps-logo">
      <h1 class="separator-title">Meet Our Experts</h1>
    </div>

    <swiper pagination>
      <swiper-slide v-for="index in 2" :key="index">
        <div class="expert-card-container">
          <ExpertCard></ExpertCard>
          <ExpertCard></ExpertCard>
        </div>
      </swiper-slide>
    </swiper>


    <div class="apply-now-container">
      <div class="apply-card-container">
        <ApplyNowCard score="10000" subtitle="PRPS Users"></ApplyNowCard>
        <ApplyNowCard score="720" subtitle="Internships"></ApplyNowCard>
      </div>
      <div class="apply-card-container">
        <ApplyNowCard score="8500" subtitle="Coaching hours"></ApplyNowCard>
        <ApplyNowCard score="300" subtitle="Coaches & Mentors"></ApplyNowCard>
      </div>
    </div>


    <div @click="showAbout = true" class="journey what-users-love-sec">
      <div v-if="showAbout">
        <img :class="{ 'up-corner': showAbout }" class="shape-1 " src="@/assets/images/what-users-love-shape1.svg"
          alt="shape1">
      </div>
      <div class="what-users-love-sec-header">
        <h3 class="what-users-love-sec-header-title">What users love about</h3>
        <div class="logo">
          <div class="logo-arrow">
            <img src="@/assets/images/prps-logo.svg" alt="prps-logo">
          </div>
          <h1 class="logo-title">PRPS</h1>
        </div>
      </div>

      <div class="article">
        <div class="author">
          <div class="author-info">
            <img class="" src="@/assets/images/landing-page-article-author.svg" alt="article-author">
            <div class="author-exp">
              <h3 class="author-name">Layla Ahmed</h3>
              <div class="author-rating">
                <img src="@/assets/images/star.svg" alt="star">
                <span>4.8</span>
              </div>
            </div>
          </div>

          <p class="content">"Praesent sit elementum odio adipiscing efficitur. nibh urna. libero, in vehicula, dui. Nam
            ipsum sit
            placerat Nullam volutpat lorem. at diam massa vehicula,
            ex. quis libero, lacus, fringilla Ut urna quam sed vehicula, sodales. in nec sollicitudin. cursus faucibus
            quis ultrices Donec eget tortor. at, faucibus non"</p>

        </div>
      </div>

      <div v-if="showAbout">
        <img :class="{ 'bottom-corner': showAbout }" class="shape-2" src="@/assets/images/what-users-love-shape2.svg"
          alt="shape2">
      </div>
    </div>

    <div class="separator">
      <img src="@/assets/images/prps-logo.svg" alt="prps-logo">
      <h1 class="separator-title">Our values</h1>
    </div>


    <swiper pagination>
      <swiper-slide v-for="(item, index) in ourValues" :key="index">
        <OurValuesCard :index="index" :slide="item">

        </OurValuesCard>
      </swiper-slide>
    </swiper>


    <div class="separator">
      <img src="@/assets/images/prps-logo.svg" alt="prps-logo">
      <h1 class="separator-title">FAQ</h1>
    </div>

    <div class="faq-section">
      <FaqCard question="What is PRPS?"
        answer="PRPS is a platform that connects students with career coaches and industry experts to help them achieve their career goals and discover their true purpose.">
      </FaqCard>
      <FaqCard question="How do I sign up for PRPS?"
        answer="PRPS is a platform that connects students with career coaches and industry experts to help them achieve their career goals and discover their true purpose.">
      </FaqCard>
      <FaqCard question="Is PRPS free to use?"
        answer="PRPS is a platform that connects students with career coaches and industry experts to help them achieve their career goals and discover their true purpose.">
      </FaqCard>
      <FaqCard question="What services does PRPS offer?"
        answer="PRPS is a platform that connects students with career coaches and industry experts to help them achieve their career goals and discover their true purpose.">
      </FaqCard>
      <FaqCard question="How do I book a session with a career coach?"
        answer="PRPS is a platform that connects students with career coaches and industry experts to help them achieve their career goals and discover their true purpose.">
      </FaqCard>
    </div>


    <div class="journey contact-sec">

      <img class="shape " src="@/assets/images/contact-us.svg" alt="shape1">
      

      <div class="contact-sec-header">
        <img class="contact-sec-header-logo" src="@/assets/images/prps-logo.svg" alt="prps-logo">
        <h1 class="contact-sec-header-title">Contact Us</h1>
      </div>

      <InputField class="field" placeholder="Enter your name"></InputField>
      <InputField class="field" placeholder="Enter your email"></InputField>
      <InputField class="field" placeholder="Enter your phone number"></InputField>
      <InputField class="field" placeholder="Share your thoughts with us" style="height: 240px"></InputField>
      <button class="button">Send</button>
      <div class="footer">
        <p class="footer-subtitle">
          Follow us on
        </p>
        <div class="footer-imgs">
          <img class="footer-img" src="@/assets/images/footer-facebook.svg" alt="facebook">
          <img class="footer-img" src="@/assets/images/instagram.svg" alt="instagram">
          <img class="footer-img" src="@/assets/images/linkdin.svg" alt="linkdin">
          <img class="footer-img" src="@/assets/images/Vector.svg" alt="X">
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import router from '@/router'
import { Vue3Marquee } from 'vue3-marquee'
import ExpertCard from '@/components/landing/ExpertCard.vue';
import ApplyNowCard from '@/components/landing/ApplyNowCard.vue';
import FaqCard from '@/components/landing/FaqCard.vue';
import InputField from '@/components/InputField.vue';
import HowToUseCard from '@/components/cards/HowToUseCard.vue';
import OurValuesCard from '@/components/cards/OurValuesCard.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
export default {
  name: 'LandingPage',
  components: {
    Vue3Marquee,
    ExpertCard,
    ApplyNowCard,
    FaqCard,
    InputField,
    HowToUseCard,
    Swiper,
    SwiperSlide,
    OurValuesCard
  },
  data() {
    return {
      imgs: [
        '@/assets/images/logos1.svg'
      ],
      ourValues: [
        {
          title: 'Integrity',
          paragraph: 'Praesent sit elementum odio adipiscing efficitur. nibh urna. libero, in vehicula, dui. Nam ipsum sit placerat Nullam volutpat lorem. at diam massa vehicula,',
          image: require('@/assets/images/ourvalues.svg')
        },
        {
          title: 'Sustainability',
          paragraph: 'Praesent sit elementum odio adipiscing efficitur. nibh urna. libero, in vehicula, dui. Nam ipsum sit placerat Nullam volutpat lorem. at diam massa vehicula,',
          image: require('@/assets/images/ourvalues-2.svg')
        },
        {
          title: 'Human-based Innovation',
          paragraph: 'Praesent sit elementum odio adipiscing efficitur. nibh urna. libero, in vehicula, dui. Nam ipsum sit placerat Nullam volutpat lorem. at diam massa vehicula,',
          image: require('@/assets/images/ourvalues-3.svg')
        }
      ],

      howToUse: [
        {
          title: 'Choose your path. Start shaping your future today.',
          image: require('@/assets/images/how-to-use-1.svg'),
          index: 0,
        },
        {
          title: 'Choose your path. Start shaping your future today.',
          image: require('@/assets/images/how-to-use-2.svg')
        },
        {
          title: 'Choose your path. Start shaping your future today.',
          image: require('@/assets/images/how-to-use-3.svg')
        },

      ],
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
@import '@/assets/sass/shared';

* {
  padding: 0;
  margin: 0;
}

.home {
  @extend %standard-logged-in-container;
}

.header {
  width: 100%;
  min-height: 680px;
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

  &-device {
    width: 428px;
    position: absolute;
    bottom: 0;
    left: -94px;
    z-index: 1;
  }

  &-shape {
    width: 512px;

    position: absolute;
    bottom: 0;
    left: -85px;
  }

}

:deep(.swiper-pagination-bullet) {
  background-color: rgba(0, 68, 241, 0.8);
}

:deep(.swiper-pagination-bullet-active) {
  background-color: #0044F1;
}

.expert-card-container {
  display: flex;
  align-items: center;
  column-gap: 16px;
}

.apply-now-container {
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  margin-bottom: 60px;

  .apply-card-container {
    display: flex;
    align-items: center;
    column-gap: 8px;
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
  justify-content: center;
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
  box-sizing: border-box;
  border-radius: 50px;
  background-color: #F6F6F6;
  margin-bottom: 44px;
  overflow: hidden;
}


.what-users-love-sec {
  width: 100%;
  background-image: linear-gradient(#4E7CF1, #0044F1);
  border-radius: 50px;
  padding: 60px 24px 40px 24px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  .shape-1 {
    position: absolute;
    left: 0;
    top: 0;
  }

  .up-corner {
    animation: moveFromTopCorner 1000ms ease-out;
  }

  @keyframes moveFromTopCorner {
    from {
      top: -100px;
      left: -100px;
    }

    to {
      top: 0;
      left: 0;
    }
  }

  .shape-2 {
    position: absolute;
    right: 0;
    bottom: 0;
  }

  .bottom-corner {
    animation: moveFromBottomCorner 1000ms ease-out;
  }

  @keyframes moveFromBottomCorner {
    from {
      bottom: -100px;
      right: -100px;
    }

    to {
      bottom: 0;
      right: 0;
    }
  }

  &-header {
    display: flex;
    flex-direction: column;
    justify-content: center;

    &-title {
      font-family: 'ArchivoBlack-Regular';
      color: #ffffff;
      font-weight: 400;
      font-size: 24px;
    }

    .logo {
      background: #ffffff;
      width: 110px;
      border-radius: 15px;
      padding: 12px;
      margin: 8px 0 15px 0;
      display: flex;
      justify-content: center;
      align-items: center;

      &-title {
        color: #0044F1;
        font-size: 24px;
        font-weight: bold;
        display: flex;
      }
    }
  }

  .article {
    background: rgba(255, 255, 255, 0.46);
    border-radius: 25px;
    width: 100%;
    padding: 16px;
    display: flex;
    flex-direction: column;

    .author {
      &-info {
        display: flex;
        align-items: center;
        column-gap: 8px;
        margin-bottom: 60px;

        .author-img {
          width: 40px;
          height: 40px;
        }

        .author-exp {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .author-name {
          font-family: 'Poppins-Regular';
          color: #fff;
          font-size: 14px;
        }

        .author-rating {
          display: flex;
          align-items: center;
          column-gap: 4px;

          span {
            font-family: 'Poppins-Regular';
            color: #fff;
            font-size: 14px;
          }
        }
      }

      .content {
        font-family: 'Poppins-medium';
        font-size: 16px;
        color: #fff;
      }
    }
  }
}

.contact-sec {
  width: 100%;
  padding: 60px 24px 40px 24px;
  background-image: linear-gradient(#0044F1, #4E7CF1);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  .shape {
    position: absolute;
    right: 0;
    top: 0;
  }

  &-header {
    display: flex;
    margin: 102px 0 24px 0;

    &-logo {
      padding: 8px;
    }

    &-title {
      font-family: 'ArchivoBlack-Regular';
      color: #ffffff;
      font-weight: 400;
      font-size: 24px
    }
  }
  .field{
    margin-bottom: 12px;
  }
  .button {
    border-radius: 12px;
    width: 100%;
    margin-bottom: 48px;
    padding: 10px 12px;
    border: none;
    color: #0044F1;
    font-family: 'Poppins-Regular';
    font-size: 18px;
  }

  .footer {
    &-subtitle {
      font-family: 'ArchivoBlack-Regular';
      color: #ffffff;
      font-size: 16px;
      text-align: center;
    }

    &-imgs {
      display: flex;
      gap: 20px;
      cursor: pointer;
    }
  }
}
</style>