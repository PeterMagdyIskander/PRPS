<template>
    <div class="more-options-card">
        <div class="more-options-card-title">
            <h6 :class="{ red: moreOptionsItem.title === 'Log out' }">
                {{ moreOptionsItem.title }}
            </h6>
            <span v-if="moreOptionsItem.comingSoon">Coming soon</span>
        </div>
        <img v-if="moreOptionsItem.showArrow" src="@/assets/images/arrow-left-inverse.svg" alt="arrow icon">
    </div>
</template>

<script>
export default {
    name: 'MoreOptionsMenuCard',
    props: {
        moreOptionsItem: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
        }
    },
}
</script>

<style lang="scss" scoped>
* {
    padding: 0;
    margin: 0;
}

.more-options-card {
    width: 100%;
    padding: 12px;
    background-color: #F6F6F6;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 12px;

    &-title {
        flex: 1;
        display: flex;
        column-gap: 8px;

        h6 {
            font-family: 'Poppins-Regular';
            font-size: 16px;
            color: #212C2D;
        }

        span {
            padding: 2px 6px;
            font-family: 'Poppins-SemiBold';
            font-size: 10px;
            color: #0044F1;
            border-radius: 4px;
            background-color: rgba(0, 68, 241, 0.1);
        }

        .red {
            color: #FF2E36;
        }
    }

    img {
        width: 24px;
        height: 24px;

    }
}
</style>