<template>
    <div class="meeting-container" :class="{
        'expert-container': type === 'expert',
        'internship-container': type === 'internship'
    }">
        <div class="meeting-container-info">
            <p class="subtitle">{{ subtitle }}</p>
            <p class="title">{{ title }}</p>
        </div>
        <button class="meeting-container-request" :class="{
            'expert-button': type === 'expert',
            'internship-button': type === 'internship'
        }">Request
        </button>
        <img v-if="type==='expert'" class="expert-shape" src="@/assets/images/request-meeting-expert-shape.svg" alt="expert shape">
        <img v-else class="internship-shape" src="@/assets/images/request-meeting-internship-shape.svg" alt="internship shape">
    </div>
</template>

<script>
export default {
    name: "meeting-request-card",
    props: {
        type: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        subtitle: {
            type: String,
            required: true,
        },
    }
}
</script>

<style lang="scss" scoped>
*{
    padding: 0;
    margin: 0;
}
.meeting-container {
    width: 100%;
    height: 120px;
    padding: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 20px;
    margin-bottom: 44px;
    position: relative;
    overflow: hidden;
    &-info {
        .subtitle {
            font-family: 'Poppins-Regular';
            font-size: 14px;
        }

        .title {
            font-family: 'ArchivoBlack-Regular';
            font-size: 22px;
        }
    }

    &-request {
        font-family: 'Poppins-Regular';
        border: none;
        padding: 3px 8px;
        border-radius: 8px;


    }

    .expert-button {
        font-family: 'Poppins-Regular';
        background-color: #0044F1;
        color: #fff;

    }

    .internship-button {
        font-family: 'Poppins-Regular';
        background-color: #FFFFFF;
        color: #0044F1;
    }
    .expert-shape, .internship-shape{
        position: absolute;
        bottom: -10px;
        right: 0;
    }
    .internship-shape{
        right:85px;
    }
}

.expert-container {
    background-color: rgba(0, 68, 241, 0.08);

    .subtitle {
        color: #535A5F;
    }

    .title {
        color: #212C2D;
    }
}

.internship-container {
    background-color: #0044F1;

    .subtitle {
        color: #FFFFFF;
    }

    .title {
        color: #FFFFFF;
    }
}
</style>