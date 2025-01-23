<template>
    <div class="card">
        <div class="main-part">
            <div class="card-info">
                <p class="name">{{ question }}</p>
                <img @click="showAbout = !showAbout" :class="{ 'rotated': showAbout }"
                    src="@/assets/images/arrow-down.svg" alt="arrow-down">
            </div>
        </div>
        <div v-if="showAbout" class="additional-content">
            <p class="about" v-if="showAbout">{{ answer }}</p>
        </div>
    </div>
</template>
<script>

export default {
    name: 'expert-card',
    props: {
        question: {
            type: String,
            required: false,
        },
        answer: {
            type: String,
            required: false,
        },
    },
    data() {
        return {
            showAbout: false
        }
    },
}

</script>

<style lang="scss" scoped>
* {
    padding: 0;
    margin: 0;
}

.card {
    width: 342px;
    border-radius: 16px;
    margin-bottom: 16px;
    padding: 0;
    border: none;

    .main-part {
        width: 342px;
        border-radius: 16px;
        background: rgba(0, 0, 0, 0.05);
        padding: 12px 18px;

        .card-info {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 8px;

            p.name {
                font-family: 'Poppins-Regular';
                font-size: 16px;
                color: #212c2d;
                margin-right: 8px;
            }

            img {
                width: 20px;
                height: 20px;
                cursor: pointer;
                transition: transform 0.3s ease;

                &.rotated {
                    transform: rotate(180deg);
                }
            }

        }
    }

    .additional-content {
        width: 100%;
        background: #fff;
        border-radius: 0 0 16px 16px;
        padding: 12px 18px;

        .about {
            font-family: 'Poppins-Regular';
            font-size: 16px;
            color: rgba(83, 90, 95, 1);
        }
    }
}
</style>