<template>
    <div class=" our-values-sec" :class="customClass">
        <swiper :pagination="{ clickable: true }" :modules="modules" @swiper="onSwiper" @slideChange="onSlideChange">
            <swiper-slide v-for="(slide, index) in slides" :key="index">
                <div class="our-values-sec-card">
                    <div class="our-values-sec-card-title">
                        <h1>{{ slide.title }}</h1>
                    </div>
                    <div class="our-values-sec-card-subtitle">
                        <p>{{ slide.subtitle }}</p>
                    </div>
                </div>
                <img class="image" :src="slide.image" alt="img">
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation, Scrollbar, A11y } from 'swiper/modules';
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import 'swiper/scss/scrollbar';
// import 'swiper/scss/bundle';

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
        },
        customClass: {
            type: String,
            // default: 'journey' // Default class if none is provided
        }
    },
    setup() {
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };
        return {
            onSwiper,
            onSlideChange,
            modules: [Navigation, Pagination, Scrollbar, A11y],
        }
    }
}
</script>

<style lang="scss" scoped>
/* Add your styles here if needed */
.swiper {
    height: 100%;
    /* Ensure the swiper takes the full height of the journey section */
    width: 100%;

&-pagination {
    position: absolute;
    /* Position it absolutely */
    bottom: 20px;
    /* Adjust this value to move it up or down */
    left: 50%;
    /* Center it horizontally */
    transform: translateX(-50%);
    /* Adjust for centering */
    display: flex !important;
    /* Ensure bullets are displayed inline */
    justify-content: center;
    /* Center the bullets */
    
}

&-pagination-bullet {
    width: 12px;
    /* Width of the bullet */
    height: 12px;
    /* Height of the bullet */
    background: #0044F1;
    /* Color of the bullet */
    border-radius: 50%;
    /* Make it circular */
    opacity: 0.5;
    /* Default opacity */
    transition: opacity 0.3s;
    /* Smooth transition for hover effect */
    margin: 0 5px;
    /* Space between bullets */
}

&-pagination-bullet-active {
    opacity: 1;
    /* Full opacity for the active bullet */
}
}
.our-values-sec {
    // width: 100%;
    // height: 780px;
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
        max-width: 300px;
        overflow: hidden;
        text-overflow: ellipsis;
        margin: 120px 0 0 24px;

        // height: 100%;
        &-title {
            font-family: 'ArchivoBlack-Regular';
            font-weight: 400;
            font-size: 32px;
            margin-bottom: 24px;

        }

        &-subtitle {
            font-family: 'Poppins-Regular';
            font-weight: 400;
            font-size: 18px;
        }
    }

    .image {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 100%;
    }
}
</style>