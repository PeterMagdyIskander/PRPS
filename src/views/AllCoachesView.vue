<template>
    <div class="all-coaches-container">
        <div class="all-coaches-container-coaches">
            <coach-card></coach-card>
            <coach-card></coach-card>
            <coach-card></coach-card>
            <coach-card></coach-card>
            <coach-card></coach-card>
            <coach-card></coach-card>
            <coach-card></coach-card>
            <coach-card></coach-card>
        </div>
    </div>
</template>

<script>
import CoachCard from '@/components/home/CoachCard.vue';
export default {
    components: { CoachCard },
    name: "all-coaches-view",
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/shared';
* {
    padding: 0;
    margin: 0;
}

.all-coaches-container {
    @extend %standard-logged-in-container;
    
    align-items: center;
    &-coaches {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        column-gap: 16px;
        row-gap: 16px;
    }

}
</style>
