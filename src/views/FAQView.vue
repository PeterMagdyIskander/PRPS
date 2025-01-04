<template>
    <div class="logged-in-container">
       

    </div>
</template>
<script>
import router from '@/router'
export default {
    name: "FAQView",
    components: {

    },
    data() {
        return {

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
    max-width: 390px;
    padding: 16px 24px 24px 24px;
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