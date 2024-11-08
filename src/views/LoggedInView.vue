<template>
    <div class="logged-in-container">
        <AppHeader :title="`Welcome, ${getUser.name}! 🙌`" subtitle="Let’s connect you with the best career coach!">
        </AppHeader>
        <div class="recommendation" v-if="!getUser.questionnaire">
            <div class="recommendation-header">
                <p class="recommendation-header-title">Recommended coaches</p>
                <p class="for-you">For you</p>
            </div>
            <p class="recommendation-text">Tell us your interests and needs to help us find the best career coach match
                for you.</p>
            <div class="call-to-action">
                <p>Fill form</p>
                <img src="@/assets/images/arrow-left.svg" alt="arrow left">
            </div>
        </div>
        <swiper pagination>
            <swiper-slide v-for="(slide, index) in meetingRequestSlides" :key="index">
                <MeetingRequestCard :type="slide.type" :subtitle="slide.subtitle" :title="slide.title" ></MeetingRequestCard>
            </swiper-slide>
        </swiper>
        <p class="session">Upcoming sessions</p>
        <SevenDayDatePicker></SevenDayDatePicker>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import SevenDayDatePicker from '@/components/calendars/SevenDayDatePicker.vue';
import AppHeader from '@/components/AppHeader.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import MeetingRequestCard from '@/components/MeetingRequestCard.vue';
import 'swiper/swiper-bundle.css';
export default {
    name: "LoggedInView",
    computed: mapGetters(['getUser']),
    components: {
        SevenDayDatePicker,
        AppHeader,
        Swiper,
        SwiperSlide,
        MeetingRequestCard
    }, data() {
        return {
            meetingRequestSlides: [
                { title: "Industry expert?", subtitle: "Want a meeting with an", type: "expert" },
                { title: "Internship?", subtitle: "Want help in applying for an", type: "internship" },
            ],
        }
    }
}
</script>

<style scoped lang="scss">
* {
    padding: 0;
    margin: 0;
}

.logged-in-container {
    display: flex;
    flex-direction: column;
    max-width: 342px;
    margin: 0 auto;
    position: relative;
    .recommendation {
        margin-bottom: 48px;

        &-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 16px;

            &-title {
                font-family: 'ArchivoBlack-Regular';
                color: #212C2D;
                font-size: 20px;
            }

            .for-you {
                font-family: 'Poppins-SemiBold';
                font-size: 12px;
                background-color: #FAE17D;
                border-radius: 4px;
                padding: 2px 6px;
            }
        }

        &-text {
            font-family: 'Poppins-Regular';
            font-size: 16px;
            color: #535A5F;
            margin-bottom: 12px;
        }

        .call-to-action {
            width: fit-content;
            background-color: #0044F1;
            padding: 10px 12px;
            display: flex;
            align-items: center;
            column-gap: 12px;
            border-radius: 12px;
            cursor: pointer;

            p {
                font-family: 'Poppins-Regular';
                font-size: 16px;
                color: #fff;
            }
        }
    }

    .session {
        font-family: 'ArchivoBlack-Regular';
        color: #212C2D;
        font-size: 20px;
        margin-bottom: 16px;
    }
}
</style>