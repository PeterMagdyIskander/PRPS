<template>
    <div class="card-container">
        <h3 class="card-container-title">{{ slide.title }}</h3>
        <p class="card-container-paragraph ">{{ slide.paragraph }}</p>
        <img class="card-container-image" :src="slide.image" alt="img" :class="`img-${index}`">
    </div>
</template>

<script>
export default {
    name: 'our-values-card',
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
    height: 714px;
    background-color: #F6F6F6;
    padding: 120px 24px 0 24px;
    display: flex;
    flex-direction: column;
    border-radius: 50px;
    margin-bottom: 44px;
    position: relative;
    overflow: hidden;

    &-title {
        font-family: 'ArchivoBlack-Regular';
        font-size: 32px;
        color: #212C2D;
        text-align: left;
        margin-bottom: 24px;
    }

    &-paragraph {
        font-family: 'Poppins-Regular';
        font-size: 18px;
        color: #212C2D;
        text-align: left;
        margin-bottom: 24px;
    }

    &-image {
        position: absolute;
    }
    .img-0{
        right: -32px;
        bottom: -61px;
    }
    .img-1{
        left: 0;
        bottom: 0;
    }
    .img-2{
        left: 0;
        bottom: -11px;
    }
}
</style>