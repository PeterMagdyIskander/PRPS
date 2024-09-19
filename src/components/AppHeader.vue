<template>
    <div class="header-container">
        <img @click="reroute()" class="logo" src="@/assets/images/logo.svg" alt="logo">
        <p class="title">{{ title }}</p>
        <p class="subtitle">{{ subtitle }}</p>
    </div>
</template>

<script>

import router from '@/router'
export default {
    name: "app-header",
    props: {
        title: {
            type: String,
            required: true,
        },
        subtitle: {
            type: String,
            required: true,
        },

    },
    methods: {
    reroute() {
      router.push(`/`)
    }
  }
}
</script>

<style lang="scss" scoped>
.header-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;
    .logo{
        align-self: flex-start;
        margin: 62px 0 40px 0;
        cursor: pointer;
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