<template>
    <div class="singup-container">
        <InputField class="data" :placeholder="'Enter your first name'"></InputField>
        <InputField class="data" :placeholder="'Enter your last name'"></InputField>
        <InputField class="data" :placeholder="'Enter your email'"></InputField>
        <InputField class="data" :placeholder="'Enter your phone number'"></InputField>
        <InputField class="drop-down" :placeholder="'Enter your gender'" :dropdown="true"></InputField>
        <div class="singup-container-actions">
            <button class="signup">
                Create account
            </button>
            <p class="signin">Do you have an account? <span @click="reroute()">Login</span></p>
        </div>
    </div>
</template>

<script>
import InputField from '@/components/InputField.vue';
import router from '@/router'
export default {
    name: 'SignupView',
    components: {
        InputField
    },
    methods: {
        reroute() {
            router.push(`/login`)
        }
    }
}
</script>

<style scoped lang="scss">
@import '@/assets/sass/shared';
* {
    padding: 0;
    margin: 0;
}

.singup-container {
    @extend %standard-logged-in-container;
    
    align-items: center;
    .data {
        margin-bottom: 16px;
    }

    .drop-down {
        margin-bottom: 227px;
    }

    &-actions {
        margin-bottom: 32px;

        .signup {
            all: unset;
            cursor: pointer;
            color: #fff;
            background-color: #0044F1;
            padding: 10px 100px;
            font-size: 18px;
            font-family: 'Poppins-Regular';
            border-radius: 12px;
            max-width: 390px;
box-sizing: content-box;
        }


        .signin {
            margin-top: 8px;
            text-align: center;
            font-size: 14px;
            font-family: 'Poppins-Regular';
            color: #535A5F;

            span {
                cursor: pointer;
                font-weight: 600;
                color: #212C2D;
            }
        }
    }
}
</style>