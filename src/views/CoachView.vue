<template>
    <div class="coach-container">
        <app-header :showBackButton="true"></app-header>
        <img class="coach-container-img" src="@/assets/images/img-coach-placeholder.svg" alt="placegolder">
        
    </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import CoachCard from '@/components/home/CoachCard.vue';
export default {
    components: { AppHeader, CoachCard },
    name: "coach-view",
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
    align-items: center;
    max-width: 342px;
    margin: 0 auto;
    position: relative;

    &-img {
        width: 100%;
        aspect-ratio: 1;
        object-fit: contain;
        border-radius: 16px;
    }

}
</style>
