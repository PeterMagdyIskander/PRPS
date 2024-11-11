<template>
    <div class="coach-card" @click="reroute(`/coach/${id}}`)">
        <img class="coach-card-img" src="@/assets/images/img-coach-placeholder.svg" alt="placegolder">
        <img class="coach-card-favorite" src="@/assets/images/favorite-coach.svg" alt="favorite coach">
        <p class="coach-card-name">{{ name }}</p>
        <p class="coach-card-job">{{ job }}</p>
    </div>
</template>

<script>
import router from '@/router'
export default {
    name: "coach-card",
    props: {
        name: {
            type: String,
            required: true,
            default: "Peter Iskander"
        },
        job: {
            type: String,
            required: true,
            default: "Software Engineer"
        },
        id: {
            type: String,
            required: true,
            default: "qwe456"
        },
    },
    methods: {
        reroute(route) {
            router.push(route)
        }
    }
}
</script>

<style lang="scss" scoped>
* {
    padding: 0;
    margin: 0;
}

.coach-card {
    height: 216px;
    width: 163px;
    position: relative;

    &-img {
        height: 163px;
        width: 163px;
        object-fit: contain;
        position: absolute;
        border-radius: 16px;
        top: 0;
        left: 0;
    }

    &-favorite {
        position: absolute;
        top: 8px;
        right: 8px;
        cursor: pointer;
    }

    &-name {
        font-family: 'Poppins-Medium';
        font-size: 16px;
        color: #212C2D;
        position: absolute;
        bottom: 21px;
        left: 0;
    }

    &-job {
        font-family: 'Poppins-Regular';
        font-size: 14px;
        color: #535A5F;
        position: absolute;
        left: 0;
        bottom: 0;
    }
}
</style>