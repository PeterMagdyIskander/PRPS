<template>
    <div class="login-container">
        <AppHeader title="Login" subtitle="Welcome back! Your next career move awaits."></AppHeader>
        <InputField class="mail" :placeholder="'Enter your email'"></InputField>
        <InputField class="password" :placeholder="'Enter your password'" :password="true"></InputField>
        <p class="forgot-password">Forgot password?</p>
        <div class="login-container-actions">
            <button class="login">
                Login
            </button>
            <div class="separator">
                <div class="line"></div>
                <p>Or</p>
                <div class="line"></div>
            </div>
            <div class="login-provider">
                <img src="@/assets/images/google.svg" alt="google icon">
                <p>continue with Google</p>
            </div>
            <div class="login-provider"><img src="@/assets/images/facebook.svg" alt="facebook icon">
                <p>continue with Facebook</p>
            </div>
            <p class="signup">Don't have an account? <span @click="reroute()">Create account</span></p>
        </div>
    </div>
</template>

<script>

import AppHeader from '@/components/AppHeader.vue';
import InputField from '@/components/InputField.vue';
import router from '@/router'
export default {
    name: 'LoginView',
    components: {
        AppHeader,
        InputField
    },
    methods: {
        reroute() {
            router.push(`/signup`)
        }
    }
}
</script>

<style scoped lang="scss">
* {
    padding: 0;
    margin: 0;
}

.login-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 390px;
    padding: 16px 24px 24px 24px;
    margin: 0 auto;
    position: relative;

    .mail {
        margin-bottom: 16px;
    }

    .password {
        margin-bottom: 8px;
    }
    .forgot-password{
        align-self: flex-end;
        font-size: 14px;
        font-family: 'Poppins-Regular';
        font-weight: 600;
        color: #212C2D;
        margin-bottom: 190px;
    }
    &-actions {
        margin-bottom: 32px;
        .separator {
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: #535A5F;
            font-family: 'Poppins-Regular';
            max-width: 390px;
            margin: 24px 0;

            .line {
                height: 1px;
                width: 40%;
                background-color: #DDE5E9;
            }
        }

        .login {
            all: unset;
            cursor: pointer;
            color: #fff;
            background-color: #0044F1;
            padding: 10px 147px;
            font-size: 18px;
            font-family: 'Poppins-Regular';
            border-radius: 12px;
            max-width: 390px;
        }

        .login-provider {
            cursor: pointer;
            background-color: rgba($color: #0044F1, $alpha: 0.08);
            display: flex;
            align-items: center;
            column-gap: 12px;
            padding: 15px 48px;
            font-size: 18px;
            font-family: 'Poppins-Regular';
            color: #535A5F;
            border-radius: 12px;
            max-width: 390px;
            margin-bottom: 16px;
        }

        .signup {
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