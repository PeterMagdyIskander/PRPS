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

    <div class="journey">
      <HowToUseSwiper :slides="howToUseSlides">
      </HowToUseSwiper>
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

    <div class="our-experts-sec">
      <processCard score="10000" subtitle="PRPS Users"></processCard>
      <processCard score="720" subtitle="Internships"></processCard>
      <processCard score="8500" subtitle="Coaching hours"></processCard>
      <processCard score="300" subtitle="Coaches & Mentors"></processCard>
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
          <h1 class="logo-separator-title">PRPS</h1>
        </div>
      </div>


      <div class="article">
        <div class="author">
          <div class="author-info">
            <div class="author-img"><img src="@/assets/images/landing-page-article-author.svg" alt="article-author">
            </div>
            <div class="author-exp">
              <div class="author-name">Layla Ahmed</div>
              <div class="author-rating">
                <div class="star"> <img src="@/assets/images/star.svg" alt="star"></div>
                <div class="rating">4.8</div>
              </div>
            </div>
          </div>
          <div class="content">
            <p>“Praesent sit elementum odio adipiscing efficitur. nibh urna. libero, in vehicula, dui. Nam ipsum sit
              placerat Nullam volutpat lorem. at diam massa vehicula,
              ex. quis libero, lacus, fringilla Ut urna quam sed vehicula, sodales. in nec sollicitudin. cursus faucibus
              quis ultrices Donec eget tortor. at, faucibus non”</p>
          </div>
        </div>
      </div>
      <div v-if="showAbout">
        <img :class="{ 'bottom-corner': showAbout }" class="shape-2" src="@/assets/images/what-users-love-shape2.svg"
          alt="shape2">
      </div>
      <!-- </div> -->
    </div>
    <div class="separator">
      <img src="@/assets/images/prps-logo.svg" alt="prps-logo">
      <h1 class="separator-title">Our values</h1>
    </div>


    <!-- <div class="journey our-values-sec">
      <swiper 
      :pagination="{clickable:true}"
      :modules="modules"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      >
        <swiper-slide>
          <div class="our-values-sec-card">
            <div class="our-values-sec-card-title">
              <h1>Integrity</h1>
            </div>
            <div class="our-values-sec-card-subtitle">
              <p>“Praesent sit elementum odio adipiscing efficitur. nibh urna. libero, in vehicula, dui. Nam ipsum sit placerat Nullam volutpat lorem. at diam massa vehicula, </p>
            </div>
          </div>
          <img src="@/assets/images/ourvalues.svg" alt="img">
        </swiper-slide>

        <swiper-slide >
          <div class="our-values-sec-card">
            <div class="our-values-sec-card-title">
              <h1>Integrity</h1>
            </div>
            <div class="our-values-sec-card-subtitle">
              <p>“Praesent sit elementum odio adipiscing efficitur. nibh urna. libero, in vehicula, dui. Nam ipsum sit placerat Nullam volutpat lorem. at diam massa vehicula,
              </p>
            </div>
          </div>
        </swiper-slide>

        <swiper-slide >
          <div class="our-values-sec-card">
            <div class="our-values-sec-card-title">
              <h1>Integrity</h1>
            </div>
            <div class="our-values-sec-card-subtitle">
              <p>“Praesent sit elementum odio adipiscing efficitur. nibh urna. libero, in vehicula, dui. Nam ipsum sit placerat Nullam volutpat lorem. at diam massa vehicula,
              </p>
            </div>
          </div>
          
        </swiper-slide>
      </swiper>
    </div> -->


    <div class="journey-two">
      <!-- <OurValuesSwiper :slides="swiperSlides" >
      </OurValuesSwiper> -->
    </div>


    <div class="separator">
      <img src="@/assets/images/prps-logo.svg" alt="prps-logo">
      <h1 class="separator-title">FAQ</h1>
    </div>

    <div class="faq-section">
      <FaqCard question="What is PRPS?"
        answer="PRPS is a platform that connects students with career coaches and industry experts to help them achieve their career goals and discover their true purpose.">
      </FaqCard>
      <FaqCard question="What is PRPS?"
        answer="PRPS is a platform that connects students with career coaches and industry experts to help them achieve their career goals and discover their true purpose.">
      </FaqCard>
      <FaqCard question="What is PRPS?"
        answer="PRPS is a platform that connects students with career coaches and industry experts to help them achieve their career goals and discover their true purpose.">
      </FaqCard>
    </div>
  </div>


  <div @click="showAbout2 = true" class="journey contact-sec">

    <div v-if="showAbout2">
      <img :class="{ 'up-right-corner': showAbout }" class="shape " src="@/assets/images/contact-us.svg" alt="shape1">
    </div>

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


</template>

<script>

import router from '@/router'
import { Vue3Marquee } from 'vue3-marquee'
import ExpertCard from '@/components/landing/ExpertCard.vue';
import ProcessCard from '@/components/landing/ProcessCard.vue';
import FaqCard from '@/components/landing/FaqCard.vue';
import HowToUseSwiper from '@/components/landing/HowToUseSwiper.vue'
import InputField from '@/components/InputField.vue';

export default {
  name: 'LandingPage',
  components: {
    Vue3Marquee,
    ExpertCard,
    ProcessCard,
    FaqCard,
    InputField,
    HowToUseSwiper
  },
  data() {
    return {
      imgs: [
        '@/assets/images/logos1.svg'
      ],
      showAbout: false,
      showAbout2: false,
      swiperSlides: [
        {
          title: 'Integrity',
          subtitle: '“Praesent sit elementum odio adipiscing efficitur. nibh urna. libero, in vehicula, dui. Nam ipsum sit placerat Nullam volutpat lorem. at diam massa vehicula,',
          image: require('@/assets/images/ourvalues.svg')
        },
        {
          title: 'Sustainability',
          subtitle: '“Praesent sit elementum odio adipiscing efficitur. nibh urna. libero, in vehicula, dui. Nam ipsum sit placerat Nullam volutpat lorem. at diam massa vehicula,',
          image: require('@/assets/images/ourvalues-2.svg')
        },
        {
          title: 'Human-based Innovation',
          subtitle: '“Praesent sit elementum odio adipiscing efficitur. nibh urna. libero, in vehicula, dui. Nam ipsum sit placerat Nullam volutpat lorem. at diam massa vehicula,',
          image: require('@/assets/images/ourvalues-3.svg')
        }
        // Add more slides as needed
      ],
      howToUseSlides: [
        {
          title: 'Choose your path. Start shaping your future today.',
          image: require('@/assets/images/how-to-use-mobile-rectangle.svg')
        },
        {
          title: 'Choose your path. Start shaping your future today.',
          image: require('@/assets/images/how-to-use-mobile-rectangle.svg')
        },
        {
          title: 'Choose your path. Start shaping your future today.',
          image: require('@/assets/images/how-to-use-mobile-rectangle.svg')
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

//   .swiper {
//   height: 100%; /* Ensure the swiper takes the full height of the journey section */
// }

// .swiper-pagination {
//   position: absolute; /* Position it absolutely */
//   bottom: 20px; /* Adjust this value to move it up or down */
//   left: 50%; /* Center it horizontally */
//   transform: translateX(-50%); /* Adjust for centering */
//   display: flex !important; /* Ensure bullets are displayed inline */
//   justify-content: center; /* Center the bullets */
// }

// .swiper-pagination-bullet {
//   width: 12px; /* Width of the bullet */
//   height: 12px; /* Height of the bullet */
//   background: #0044F1; /* Color of the bullet */
//   border-radius: 50%; /* Make it circular */
//   opacity: 0.5; /* Default opacity */
//   transition: opacity 0.3s; /* Smooth transition for hover effect */
//   margin: 0 5px; /* Space between bullets */
// }

// .swiper-pagination-bullet-active {
//   opacity: 1; /* Full opacity for the active bullet */
// }




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
  overflow: hidden;
  // display:flex;
  // justify-content: center;
  // align-items: center;
}

.journey-two {
  width: 100%;
  height: 780px;
  box-sizing: border-box;
  border-radius: 50px;
  background-color: #F6F6F6;
  margin-bottom: 44px;
  overflow: hidden; // Ensure content does not overflow
  display: flex; // Use flexbox to center content
  // justify-content: center; // Center horizontally
  // align-items: center; // Center vertically
}

.our-experts-sec {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.what-users-love-sec {
  width: 100%;
  // height: 100%;
  margin: 0;
  padding: 0;
  // top:0;
  // box-sizing: border-box;
  background-image: linear-gradient(#4E7CF1, #0044F1);
  border-radius: 50px;
  padding: 140px 24px 40px 24px;
  // text-align: center;
  position: relative;
  // overflow: hidden;
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
      display: flex;
      justify-content: center;
      text-align: centre;
      // margin: auto;
    }

    .logo {
      background: #ffffff;
      width: 110px;
      height: 48px;
      border-radius: 15px;
      margin: 8px 0 8px 24px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      // position:absolute;
      left: 0;

      &-arrow {
        // position:absolute;
        // left:36.91px;
        display: flex;
        justify-content: center;
        // text-align: center;
        align-items: center;

      }

      &-separator-title {
        color: #0044F1;
        font-size: 24px;
        font-weight: bold;
        // position:absolute;
        // left:62.05px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 2px // text-align: center;
      }
    }
  }

  .article {
    background: rgba(255, 255, 255, 0.46);
    border-radius: 25px;
    width: 294px;
    height: 475px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    // justify-content: center;
    // align-items: center;
    margin: auto;

    .author {
      &-info {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;

        .author-img {
          padding: 10px;
        }

        .author-exp {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .author-rating {
          display: flex;
          flex-direction: row;
        }
      }

      .content {
        font-family: 'Poppins-Regular';
        font-size: 16px;
        height: 100%;
        display: flex;
        align-items: center;
      }
    }
  }
}

.contact-sec {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background-image: linear-gradient(#0044F1, #4E7CF1);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  // justify-content: space-around;
  .shape {
    position: absolute;
    right: 0;
    top: 0;
  }

  .up-right-corner {
    animation: moveFromTopRightCorner 1000ms ease-out;
  }

  @keyframes moveFromTopRightCorner {
    from {
      top: -100px;
      right: -100px;
    }

    to {
      top: 0;
      right: 0;
    }
  }

  &-header {
    display: flex;
    margin-top: 102px;

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

  .field {
    margin: 24px 24px 12px 24px;

  }

  .button {
    border-radius: 12px;
    ;
    width: 60%;
    padding: 10px 12px;
    border: none;
    color: #0044F1;
    font-family: 'Poppins-Regular';
    font-weight: 400;
    font-size: 18px;
  }

  .footer {
    &-subtitle {
      font-family: 'ArchivoBlack-Regular';
      color: #ffffff;
      font-weight: 400;
      font-size: 16px;
      text-align: center;
    }

    &-imgs {
      display: flex;
      flex-direction: row;
      gap: 10px;
      cursor: pointer;
    }
  }
}

// .our-values-sec{
//   display:flex;
//     flex-direction: column;
//     // justify-content: center;
//     width:100%;
//     height: 780px;
//     position:relative;

//   &-card{
//     width:100%;
//     max-width: 300px;
//     overflow: hidden;
//     text-overflow: ellipsis;
//     margin: 120px 0 0 24px;
//     // height: 100%;
//     &-title{
//       font-family: 'ArchivoBlack-Regular';
//     font-weight: 400;
//     font-size: 32px;
//     margin-bottom: 24px;

//     }
//     &-subtitle{
//       font-family: 'Poppins-Regular';
//     font-weight: 400;
//     font-size: 18px;
//     }
//   }
//   img{
//     width:100%;
//     height: 100%;
//   }
// }</style>