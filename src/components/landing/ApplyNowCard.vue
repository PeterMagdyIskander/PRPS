<template>
    <div class="card">
        <div class="card-info">
            <p class="score"> +{{ score }}</p>
            <p class="subtitle">{{ subtitle }}</p>
        </div>
        <p class="apply">Apply now <span> >> </span></p>
    </div>
</template>


<script>

export default {
    name: 'apply-now',
    props: {
        score: {
            type: Number,
            required: false,
        },
        subtitle: {
            type: String,
            required: false,
        },
    },
    data() {
        return {

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
    width: 167px;
    height: 163px;
    background-color: #F6F6F6;
    border-radius: 30px;
    padding: 20px 14px 20px 20px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &-info {
        .score {
            font-family: 'ArchivoBlack-Regular';
            font-size: 24px;
            color: #212C2D;

        }

        .subtitle {
            font-family: 'Poppins-medium';
            font-size: 14px;
            color: #535A5F;
        }


    }

    .apply {
        font-family: 'Poppins-Regular';
        font-size: 14px;
        color: #0044F1;
        align-self: flex-end;
    }
}
</style>