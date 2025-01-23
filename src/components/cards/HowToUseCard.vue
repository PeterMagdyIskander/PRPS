<template>
    <div class="card-container">

        <h3 class="card-container-title title-top" v-if="index % 2 == 0">{{ slide.title }}</h3>

        <img class="card-container-image" :src="slide.image" alt="img">

        <h3 class="card-container-title title-bottom" v-if="index % 2 == 1">{{ slide.title }}</h3>
    </div>
</template>

<script>
export default {
    name: 'how-to-use-card',
    props: {
        slide: {
            type: Object,
            required: true
        },
        index: {
            type: Number,
            required: true
        }
    },
}
</script>

<style lang="scss" scoped>
.card-container {
    width: 100%;
    max-width: 342px;
    background-color: #F6F6F6;
    padding: 0 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 24px;
    position: relative;
    border-radius: 50px;

    margin-bottom: 44px;
    &-image {
        width: 90%;
    }

    &-title {
        font-family: 'Poppins-Regular';
        font-size: 20px;
        color: #212C2D;
        text-align: center;
    }

    .title-top {
        margin-top: 60px;
    }

    .title-bottom {
        margin-bottom: 60px;
    }
}
</style>