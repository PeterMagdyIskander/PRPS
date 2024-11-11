<template>
    <div class="header-container">
        <img v-if="showBackButton" class="back-button" @click="reroute('/')" src="@/assets/images/back-button.svg" alt="back-button">
        <div v-else class="logo-container"
            :class="{ 'logged': getUser, 'not-logged': getUser === null }">
            <img @click="reroute('/')" src="@/assets/images/logo.svg" alt="logo">
            <img @click="reroute()" v-if="getUser" src="@/assets/images/heart.svg" alt="heart">
        </div>

        <p class="title" v-if="title">{{ title }}</p>
        <p class="subtitle" v-if="subtitle">{{ subtitle }}</p>
    </div>
</template>

<script>

import { mapGetters } from 'vuex';
import router from '@/router'
export default {
    name: "app-header",
    props: {
        title: {
            type: String,
            required: false,
        },
        subtitle: {
            type: String,
            required: false,
        },
        showBackButton: {
            type: Boolean,
            required: false,
            default: false,
        },
    },
    computed: mapGetters(['getUser',]),
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

.header-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 62px;
    margin-bottom: 24px;

    .back-button {
        width: 48px;
        height: 48px;
        margin-bottom:32px;
        cursor: pointer;
    }

    .logo-container {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;

        margin-bottom: 24px;
    }

    .logged {
        padding-bottom: 12px;
        border-bottom: 1px solid #D7DBDF;
    }

    .not-logged {
        margin-bottom: 40px;
    }

    & .title {
        font-family: 'ArchivoBlack-Regular';
        color: #212C2D;
        font-size: 28px;
        margin-bottom: 8px;
    }

    & .subtitle {
        font-family: 'Poppins-Regular';
        font-size: 14px;
        color: #535A5F;
    }
}
</style>