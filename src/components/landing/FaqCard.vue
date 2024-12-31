<template>
    <!-- <div class="card">
        <div class="card-info">
            <!-- <div class="card-info-titles"> -->
                <!-- <p class="name">{{ question }}</p>
                <img @click="showAbout = !showAbout" :class="{ 'rotated': showAbout }"
                    src="@/assets/images/arrow-down.svg" alt="arrow-down"> -->
            <!-- </div> -->
        <!-- </div>
        <transition name="slide-fade"> -->
            <!-- <div v-if="showAbout" class="additional-content">
                <p class="about" v-if="showAbout">{{ answer }}</p>
            </div>
        </transition> -->
    <!-- </div> --> 
    <div class="card">
        <div class="main-part">
            <div class="card-info">
                <p class="name">{{ question }}</p>
                <img @click="showAbout = !showAbout" :class="{ 'rotated': showAbout }"
                    src="@/assets/images/arrow-down.svg" alt="arrow-down">
            </div>
        </div>
        <div class="additional-part">
            <div v-if="showAbout" class="additional-content">
                <p class="about" v-if="showAbout">{{ answer }}</p>
        </div>
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
    border-radius: 16px ;
    margin-bottom: 16px;
    padding: 0;
    border:none;
    // background: rgba($color: #000, $alpha: 0.05);
    // padding: 12px 18px;
    // margin: 16px 24px;
    .main-part{
        width:342px;
        border-radius: 16px;
        background: rgba($color: #000, $alpha: 0.05);
        padding: 12px 18px;
        // margin: 16px 24px;
        // border-radius: 16px solid ;
    
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

            // .about {
            //     font-family: 'Poppins-Regular';
            //     font-size: 16px;
            //     color: #535a5f;
            //     height: 85px;
            //     padding: 16px;
            // }

            .additional-content {
                width: 100%;
                background: #fff;
                border-radius: 0 0 16px 16px;
                padding: 12px 18px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                position: absolute;
                top: 100%;
                left: 0;
                transition: 0.3s ;

                .about {
                    font-family: 'Poppins-Regular';
                    font-size: 16px;
                }
            }
        }

        .slide-fade-enter-active,
        .slide-fade-leave-active {
            transition: all 0.3s ease;
        }

        .slide-fade-enter,
        .slide-fade-leave-to {
            opacity: 0;
            transform: translateY(-10px);
            }
        }}



        // .marginBottom{
        //     margin-bottom: 12px;
        // }</style>