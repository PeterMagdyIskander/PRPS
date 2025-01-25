<template>
    <div class="input-field">
        <input :class="{ 'contact-us': contactUs }" :type="isPassword ? 'password' : 'text'" :placeholder="placeholder"
            v-on:input="$emit('update:modelValue', $event.target.value)" :value="modelValue">
        <img v-if="password && !showPassword" @click="viewPassword()" src="@/assets/images/closed.svg"
            alt="show password">
        <img v-if="password && showPassword" @click="viewPassword()" src="@/assets/images/opened.svg"
            alt="show password">

        <img v-if="dropdown" src="@/assets/images/arrow-down.svg" alt="arrow down">

    </div>
</template>
<script>
export default {
    name: "input-field",
    props: {
        password: {
            type: Boolean,
            required: false,
            default: false,
        },
        dropdown: {
            type: Boolean,
            required: false,
            default: false,
        },
        placeholder: {
            type: String,
            required: true,
        },
        contactUs: {
            type: Boolean,
            required: false,
            default: false
        },

        modelValue: String

    },
    emits: ["update:modelValue"],
    data() {
        return {
            isPassword: false,
            showPassword: false
        }
    },
    mounted() {
        this.isPassword = this.password;
    },
    methods: {
        reroute() {
            router.push(`/`)
        },
        viewPassword() {
            this.isPassword = !this.isPassword;
            this.showPassword = !this.showPassword;
        }
    }
}
</script>

<style lang="scss" scoped>
.input-field {
    width: 100%;
    max-width: 390px;
    margin: 0 auto;
    padding: 10px 12px;
    border: 1px solid #D7DBDF;
    border-radius: 12px;
    position: relative;

    input {
        all: unset;
        width: 100%;
        color: #535A5F;
        font-size: 16px;
        font-family: 'Poppins-Regular';
    }

    img {
        width: 24px;
        height: 24px;
        right: 13px;
        position: absolute;
    }

    .contact-us {
        color: #fff;

        &::placeholder {

            color: #fff;
        }
    }
}
</style>