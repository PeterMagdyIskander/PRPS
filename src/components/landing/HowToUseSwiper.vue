<template>
    <div class=" how-to-use-sec">
        <swiper pagination>
            <swiper-slide v-for="(slide, index) in slides" :key="index">
                <div class="how-to-use-sec-card">
                    <!-- Conditional rendering for title position -->
                    <div v-if="index === 0 || index === 2" class="how-to-use-sec-card-title">
                        <!-- For the first and third slides -->
                        <h3>{{ slide.title }}</h3>
                    </div>
                    <div class="how-to-use-sec-card-image">
                        <img class="image" :src="slide.image" alt="img">
                    </div>
                    <div v-if="index === 1" class="how-to-use-sec-card-title"> <!-- For the second slide -->
                        <h3>{{ slide.title }}</h3>
                    </div>
                </div>

            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
export default {
    name: 'OurValuesSwiper',
    components: {
        Swiper,
        SwiperSlide
    },
    props: {
        slides: {
            type: Array,
            required: true
        }
    },
}
</script>

<style lang="scss" scoped>
.how-to-use-sec {
    width: 100%;
    height: 780px;
    // box-sizing: border-box;
    // border-radius: 50px;
    // background-color: #F6F6F6;
    // margin-bottom: 44px;
    // overflow: hidden;

    display: flex;
    flex-direction: column;
    // justify-content: center;
    width: 100%;
    // height: 780px;
    position: relative;

    &-card {
        width: 100%;
        height: 100%;
        // max-width: 300px;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-top: 60px;
        display: flex;
        flex-direction: column;
        // justify-content: space-between;
        align-items: center;

        // height: 100%;
        &-title {
            font-family: 'Poppins-Regular';
            font-weight: 100;
            font-size: 16px;
            margin-bottom: 24px;
            text-align: center;
        }

        &-image {
            // width: 100%;
            // height: 100%;
            // margin:auto;
            // padding:24px;
            margin-bottom: 24px;
        }
    }

}
</style>