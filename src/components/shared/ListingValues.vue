<template>
    <div class="list-container">
        <div class="value-container" v-for="value in values">
            <input type="radio" :name="valueId" :value="value" v-model="selectedValue">
            <p>{{ value }} </p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        values: {
            required: true,
            type: Array,
            default: []
        },
        valueId: {
            required: true,
            type: String,
            default: "values"
        }
    },
    data() {
        return {
            selectedValue: false,
        };
    },
    methods: {},
};
</script>

<style lang="scss" scoped>
* {
    padding: 0;
    margin: 0;
}

.list-container {
    width: 345px;
}

.value-container {
    width: 100%;
    display: flex;
    align-items: center;
    column-gap: 8px;
    padding: 12px;
    p {
        font-family: 'Poppins-Regular';
        font-size: 16px;
        color: #535A5F;
    }
}
</style>