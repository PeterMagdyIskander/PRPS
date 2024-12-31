<template>
        <div class="card">
            <div class="card-info">
                <p class="score"  > +{{ score }}</p>
                <p class="subtitle">{{ subtitle }}</p>
                <p class="apply">Apply now <span > >> </span></p>
            </div>
        </div>
</template>


<script>

export default {
    name: 'process-card',
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
    padding:0;
    margin:0;
}

.card{
    // width: 327px;
    width: 167px;
    // height: 337px;
    height: 163px;
    background-color: #F6F6F6;
    border-radius: 30px;
    // margin-bottom: 60px;
    // display: flex;
    // flex-direction: column;
    // align-items: center;
    // justify-content: flex-end;
    // padding: 60px 32px 40px 32px;
    padding: 20px 14px 20px 14px;
    // margin: 0 12px 60px 12px;
    margin: 8px ;
    position: relative;
    
    &-info {

    .score{
        font-family: 'ArchivoBlack-Regular';
        // font-size: 48px; 
        font-size: 24px; 
        color: #212C2D;
        position:absolute;
        // top:60px;
        top:20px;
        // left:32px;
        left:14px;

    }
    .subtitle{
        font-family: 'Poppins-Regular';
        font-size: 14px;
        backface-visibility: #535A5F;
        position:absolute;
        // top:124px;
        top: 51.83px;
        // left: 32px;
        left: 14px;
    }
    .apply{
        font-family: 'Poppins-Regular';
        // font-size: 16px;
        font-size: 14px;
        color: #0044F1;
        position: absolute;
        // right:60px;
        right:36px;
        // bottom:44px;
        bottom:20px;
        // span{
            
        // }
    }
}
}
</style>