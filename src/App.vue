<template>
    <router-view />
    <nav class="footer">
      <ul class="nav">
        <li @click="closeMenu">
          <router-link to="/">
            <div class="nav-item">
              <img src="@/assets/images/home-2.svg" alt="">
              <h6>Home</h6>
            </div>
          </router-link>
        </li>
        <li @click="closeMenu">
          <router-link to="/bookings">
            <div class="nav-item">
              <img src="@/assets/images/calendar.svg" alt="">
              <h6>Bookings</h6>
            </div>
          </router-link>
        </li>
        <li @click="closeMenu">
          <router-link to="/notifications">
            <div class="nav-item">
              <img src="@/assets/images/notification.svg" alt="">
              <h6>Notification</h6>
            </div>
          </router-link>
        </li>
        <li @click="closeMenu">
          <div class="nav-item">
            <img src="@/assets/images/more-square.svg" alt="">
            <h6>More</h6>
          </div>
        </li>
      </ul>
    </nav>
</template>

<script>

import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      navOpen: false,
    }
  }, methods: {
    closeMenu() {
      this.navOpen = false;
    }
  },
  computed: mapGetters(['getUser',]),
}
</script>
<style lang="scss">
* {
  padding: 0;
  margin: 0;
}

html,
body {
  height: 100%;
  position: relative;
}

#app {
  height: 100%;
  position: relative;
}

.footer {
  max-width: 390px;
  margin: 0 auto;
  position: sticky;
  bottom: 0;
  background-color: #fff;
  z-index: 1;

  .nav {
    width: 100%;
    padding: 14px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid #D7DBDF;

    li {
      list-style: none;
    }

    &-item {
      width: 80px;
      display: flex;
      align-items: center;
      flex-direction: column;
      row-gap: 5px;

      img {
        width: 24px;
        height: 24px;
      }

      h6 {
        font-family: 'Cairo-SemiBold';
        font-size: 14px;
        color: #7D7D7D;
        margin: 0;
      }


    }
  }
}

a {
  text-decoration: unset !important;
}

a.router-link-active {
  .nav-item {
    img{
      filter: invert(18%) sepia(65%) saturate(6217%) hue-rotate(224deg) brightness(91%) contrast(109%);
    }
    h6 {
      color: #0044F1 !important;
    }
  }
}
</style>
