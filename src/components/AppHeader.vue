<template>
    <div class="header-container"
        :style="[showBackButton && !title && !subtitle ? { 'margin-bottom': 0 + 'px' } : null]">
        <img v-if="showBackButton" class="back-button" @click="reroute('/')" src="@/assets/images/back-button.svg"
            alt="back-button">
        <div v-else class="logo-container" :class="{ 'logged': getUser, 'not-logged': getUser === null }">
            <img @click="reroute('/')" src="@/assets/images/logo.svg" alt="logo">
            <img @click="reroute('/')" v-if="getUser" src="@/assets/images/heart.svg" alt="heart">
        </div>

        <p class="title" v-if="title">{{ title }}</p>
        <p class="subtitle" v-if="subtitle">{{ subtitle }}</p>
    </div>
</template>

<script>

import { mapGetters } from 'vuex';
import router from '@/router'

import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
export default {
    name: "app-header",
    computed: mapGetters(['getUser',]), setup() {
        const route = useRoute();
        const title = ref("");
        const subtitle = ref("");
        const showBackButton = ref("");

        const updateHeader = () => {
            title.value = route.meta.title || false;
            subtitle.value = route.meta.subtitle || false;
            showBackButton.value = route.meta.showBackButton || false;

        };

        watch(route, updateHeader, { immediate: true });

        return {
            title,
            subtitle,
            showBackButton
        };
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

.header-container {
    width: 100%;
    max-width: 390px;
    padding: 16px 24px 24px 24px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    .back-button {
        width: 48px;
        height: 48px;
        margin-bottom: 32px;
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