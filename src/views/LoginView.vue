<template>
    <div class="login-container">
        <InputField class="mail" :placeholder="'Enter your email'" :modelValue="userName"
            @update:model-value="handleUsernameUpdate"></InputField>
        <InputField class="password" :placeholder="'Enter your password'" :password="true" :modelValue="password"
            @update:model-value="handlePasswordUpdate">
        </InputField>
        <p class="forgot-password">Forgot password?</p>
        <div class="login-container-actions">
            <button class="login" @click="login()">
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

import { mapActions } from 'vuex';
import InputField from '@/components/InputField.vue';
import router from '@/router'
export default {
    name: 'LoginView',
    components: {
        InputField
    },
    data() {
        return {
            userName: '',
            password: ''
        }
    },
    methods: {

        ...mapActions(['updateUser']),
        reroute() {
            router.push(`/signup`)
        },
        handleUsernameUpdate(username) {
            this.userName = username
        },
        handlePasswordUpdate(password) {
            this.password = password
        },
        login() {
            if (this.userName === 'karim' && this.password === 'karim') {
                const user = {
                    name: 'Karim',
                    questionnaire: true,
                    role: 'ADMIN'
                }
                this.updateUser(user)
                router.push(`/home`)
            }
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

.login-container {
    @extend %standard-logged-in-container;

    align-items: center;

    .mail {
        margin-bottom: 16px;
    }

    .password {
        margin-bottom: 8px;
    }

    .forgot-password {
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
            box-sizing: content-box;
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
            box-sizing: content-box;
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
            box-sizing: content-box;
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