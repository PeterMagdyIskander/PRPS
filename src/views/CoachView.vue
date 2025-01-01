<template>
    <div class="coach-container">
        <app-header :showBackButton="true"></app-header>
        <img class="coach-container-img" src="@/assets/images/img-coach-placeholder.svg" alt="placegolder">
        <img class="coach-container-favorite" src="@/assets/images/favorite-coach.svg" alt="favorite coach">
        <p class="coach-container-name">Peter Iskander</p>
        <p class="coach-container-position">Software Engineer @<span class="coach-container-company">Valeo</span>
        </p>
        <p class="coach-container-title">Overview</p>
        <p class="coach-container-overview">Peter is a seasoned software engineer with over 20 years of experience in
            the tech industry. His deep understanding of complex systems and passion for innovation have consistently
            driven successful outcomes. Known for his ability to architect scalable solutions and spot emerging tech
            trends, Peter combines strategic foresight with hands-on expertise. His leadership and commitment to
            excellence make him a highly regarded figure in the software engineering community.</p>
        <p class="coach-container-title">Fun fact 🤩</p>
        <div class="coach-container-fun-fact-question" @click="showAnswer = !showAnswer"
            :style="showAnswer ? '' : { marginBottom: '60px' }">
            <p>If you could have any superpower to help you in your career, what would it be and why?</p>
            <img src="@/assets/images/arrow-down.svg" alt="arrow down"
                :style="showAnswer ? { transform: 'rotate(180deg)' } : ''">
        </div>
        <div v-if="showAnswer" class="coach-container-fun-fact-answer">
            <p>Future sight</p>
        </div>
        <button class="coach-container-request" @click="requestSessionMenuIsOpen = true">Request Session</button>
    </div>
    <SlidingMenu :menuIsOpen="requestSessionMenuIsOpen" menuTitle="Select session date" submitButtonTitle="Continue"
        @close="requestSessionMenuIsOpen = false">
        <MonthDatePicker #menu-content></MonthDatePicker>
        <ListingValues :values="times" value-id="availableTimes"></ListingValues>
    </SlidingMenu>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import MonthDatePicker from '@/components/calendars/MonthDatePicker.vue';
import CoachCard from '@/components/home/CoachCard.vue';
import ListingValues from '@/components/shared/ListingValues.vue';
import SlidingMenu from '@/components/shared/SlidingMenu.vue';
export default {
    components: { AppHeader, CoachCard, SlidingMenu, MonthDatePicker,ListingValues },
    name: "coach-view",
    data() {
        return {
            showAnswer: false,
            requestSessionMenuIsOpen: false,
            times:["11:00 AM","12:00 PM","01:00 PM","02:00 PM","03:00 PM","04:00 PM","05:00 PM","06:00 PM"]
        }
    }
}
</script>

<style lang="scss" scoped>
* {
    padding: 0;
    margin: 0;
}

.coach-container {
    display: flex;
    flex-direction: column;
    max-width: 342px;
    margin: 0 auto;
    position: relative;

    &-img {
        width: 100%;
        aspect-ratio: 1;
        object-fit: contain;
        border-radius: 16px;
        margin-bottom: 24px;
    }

    &-favorite {
        position: absolute;
        right: 16px;
        top: 158px;
        cursor: pointer;
    }

    &-name {
        font-family: 'ArchivoBlack-Regular';
        color: #212C2D;
        font-size: 26px;
        margin-bottom: 12px;
    }

    &-position {
        font-family: 'Poppins-Regular';
        font-size: 18px;
        color: #535A5F;
        margin-bottom: 40px;
    }

    &-company {
        font-family: 'Poppins-Regular';
        font-size: 18px;
        color: #212C2D;
    }

    &-title {
        font-family: 'ArchivoBlack-Regular';
        color: #212C2D;
        font-size: 20px;
        margin-bottom: 16px;
    }

    &-overview {
        font-family: 'Poppins-Regular';
        font-size: 16px;
        color: #535A5F;
        margin-bottom: 40px;
    }

    &-fun-fact-question {
        padding: 16px 24px;
        border-radius: 16px;
        display: flex;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.05);
        font-family: 'Poppins-Regular';
        font-size: 16px;
        color: #000;
        cursor: pointer;
    }

    &-fun-fact-answer {
        padding: 16px 24px;
        margin-bottom: 60px;
        font-family: 'Poppins-Regular';
        font-size: 16px;
        color: #535A5F;
    }

    &-request {
        font-family: 'Poppins-Regular';
        font-size: 18px;
        color: #fff;
        padding: 10px;
        border: 1px solid #0044F1;
        background-color: #0044F1;
        border-radius: 12px;
        width: 100%;
        position: sticky;
        bottom: 87px;
    }
}
</style>
