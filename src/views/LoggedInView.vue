<template>
    <div class="logged-in-container">
        <AppHeader :title="`Welcome, ${getUser.name}! 🙌`" subtitle="Let’s connect you with the best career coach!">
        </AppHeader>
        <swiper pagination>
            <swiper-slide v-for="(slide, index) in meetingRequestSlides" :key="index">
                <MeetingRequestCard :type="slide.type" :subtitle="slide.subtitle" :title="slide.title">
                </MeetingRequestCard>
            </swiper-slide>
        </swiper>
        <div class="recommendation">
            <div class="recommendation-header">
                <p class="recommendation-header-title">Recommended coaches</p>
                <p class="for-you">For you</p>
            </div>
            <p v-if="!getUser.questionnaire" class="recommendation-text">Tell us your interests and needs to help us
                find the best career coach match
                for you.</p>
            <div v-if="!getUser.questionnaire" class="call-to-action">
                <p>Fill form</p>
                <img src="@/assets/images/arrow-left.svg" alt="arrow left">
            </div>
            <swiper v-else>
                <swiper-slide>
                    <div class="expert-card-container">
                        <CoachCard></CoachCard>
                        <CoachCard></CoachCard>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="expert-card-container">
                        <CoachCard></CoachCard>
                        <div class="show-more" @click="reroute('/all-coaches')">
                            <p>Show more</p>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
        </div>

        <p class="session">Upcoming sessions</p>
        <SevenDayDatePicker></SevenDayDatePicker>
    </div>
</template>
<script>

import { mapGetters } from 'vuex';
import SevenDayDatePicker from '@/components/calendars/SevenDayDatePicker.vue';
import AppHeader from '@/components/AppHeader.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import MeetingRequestCard from '@/components/home/MeetingRequestCard.vue';
import 'swiper/swiper-bundle.css';
import CoachCard from '@/components/home/CoachCard.vue';
import router from '@/router'
export default {
    name: "LoggedInView",
    computed: mapGetters(['getUser']),
    components: {
        SevenDayDatePicker,
        AppHeader,
        Swiper,
        SwiperSlide,
        MeetingRequestCard,
        CoachCard
    }, 
    data() {
        return {
            meetingRequestSlides: [
                { title: "Industry expert?", subtitle: "Want a meeting with an", type: "expert" },
                { title: "Internship?", subtitle: "Want help in applying for an", type: "internship" },
            ],
        }
    },
    methods: {
        reroute(route) {
            router.push(route)
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
        margin-bottom: 24px;

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

:deep(.swiper-pagination-bullet) {
    background-color: rgba(0, 68, 241, 0.8);
}

:deep(.swiper-pagination-bullet-active) {
    background-color: #0044F1;
}

.expert-card-container {
    display: flex;
    align-items: flex-start;
    column-gap: 16px;
}

.show-more {
    width: 163px;
    height: 163px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    background-color: #F6F6F6;
    cursor: pointer;
    p {
        font-family: 'Poppins-Bold';
        font-size: 16px;
        color: #212C2D;
    }
}
</style>