<template>
    <div class="container">
        <button class="login">
            Login
        </button>
        <div class="separator">
            <div class="line"></div>
            <p>Or</p>
            <div class="line"></div>
        </div>
        <div class="login-provider">
            <img src="@/assets/images/google.svg" alt="">
            <p>continue with Google</p>
        </div>
        <div class="login-provider"><img src="@/assets/images/facebook.svg" alt="">
            <p>continue with Facebook</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LoginView',

}
</script>

<style scoped lang="scss">
* {
    padding: 0;
    margin: 0;
}

.container {
    .separator {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #535A5F;
        font-family: 'Poppins-Regular';
        max-width: 342px;
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
        max-width: 342px;
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
        max-width: 342px;
    }
}
</style>