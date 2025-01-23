<template>
    <div class="card">
        <div class="card-info" :class="{ 'fullHeight': showAbout }">
            <div class="card-info-titles">
                <p class="name">Karim El Gamal</p>
                <p class="occupation"  :class="{ 'marginBottom': showAbout }">Finance</p>
                <p class="about" v-if="showAbout">A seasoned finance expert,
                    Karim has navigated the complexities of global markets with precision and insight for 20+ years.
                    With a knack for spotting lucrative opportunities, they've consistently delivered stellar results.
                    Their strategic vision and innovative approach make them a sought-after leader in the financial
                    industry.</p>
            </div>
            <img @click="showAbout = !showAbout" src="@/assets/images/arrow-square-up.svg" alt="arrow-square-up">
        </div>
    </div>
</template>

<script>

export default {
    name: 'expert-card',
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
    width: 180px;
    height: 180px;
    border-radius: 25px;
    background-image: url('@/assets/images/expert-img.svg');
    background-repeat: no-repeat;
    margin-bottom: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 44px;
    
    &-info {
        width: 90%;
        height: 60px;
        background-color: rgba($color: #000000, $alpha: 0.6);
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 8px;
        margin:10px;
        overflow-y: hidden;
        &-titles {
            
            overflow-y: hidden;
            .name {
                font-family: 'Poppins-medium';
                font-size: 14px;
                color: #fff;
            }

            .occupation {
                font-family: 'Poppins-Regular';
                font-size: 14px;
                color: rgba($color: #fff, $alpha: 0.8);
            }

            .about {
                font-family: 'Poppins-Regular';
                font-size: 14px;
                color: rgba($color: #fff, $alpha: 0.8);
                height: 85px;
                overflow-y: scroll;
            }
        }

        img {
            width: 20px;
            height: 20px;
        }
    }
}

.fullHeight {
    height: 100%;
    align-items: start;
}
.marginBottom{
    margin-bottom: 12px;
}
</style>