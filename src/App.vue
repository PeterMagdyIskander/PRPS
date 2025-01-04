<template>
  <AppHeader v-if="!hideHeader">
  </AppHeader>
  <router-view />
  <nav class="footer">
    <ul class="nav">
      <li>
        <router-link to="/">
          <div class="nav-item">
            <img src="@/assets/images/home-2.svg" alt="">
            <h6>Home</h6>
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/bookings">
          <div class="nav-item">
            <img src="@/assets/images/calendar.svg" alt="">
            <h6>Bookings</h6>
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/notifications">
          <div class="nav-item">
            <img src="@/assets/images/notification.svg" alt="">
            <h6>Notification</h6>
          </div>
        </router-link>
      </li>
      <li @click="moreOptionsMenuIsOpen = !moreOptionsMenuIsOpen">
        <div class="nav-item">
          <img src="@/assets/images/more-square.svg" alt="">
          <h6>More</h6>
        </div>
      </li>
    </ul>
  </nav>
  <SlidingMenu menuTitle="Help" :moreOptionsMenu="true" :show-buttons="false" :menuIsOpen="moreOptionsMenuIsOpen"
    @close="moreOptionsMenuIsOpen = false">
    <template #menu-content>
      <MoreOptionsMenuCard v-for="moreOptionsItem in moreOptionsItems" :key="moreOptionsItem.id"
        :more-options-item="moreOptionsItem"></MoreOptionsMenuCard>
    </template>
  </SlidingMenu>
</template>

<script>

import { mapGetters } from 'vuex';
import MoreOptionsMenuCard from './components/cards/MoreOptionsMenuCard.vue';
import AppHeader from '@/components/AppHeader.vue';
import SlidingMenu from './components/shared/SlidingMenu.vue';
import { useRoute } from 'vue-router';
import { ref, watch } from 'vue';
export default {
  components: {
    SlidingMenu,
    AppHeader,
    MoreOptionsMenuCard
  },
  data() {
    return {
      moreOptionsMenuIsOpen: false,
      moreOptionsItems: [
        {
          id: 1,
          title: "FAQ",
          comingSoon: false,
          showArrow: true
        },
        {
          id: 2,
          title: "How to use",
          comingSoon: false,
          showArrow: true
        },
        {
          id: 3,
          title: "Resources",
          comingSoon: true,
          showArrow: true
        },
        {
          id: 4,
          title: "Contact us",
          comingSoon: false,
          showArrow: true
        }
      ]
    }
  }, methods: {
  },
  computed: mapGetters(['getUser',]), setup() {
    const route = useRoute();
    const hideHeader = ref("");
    const updateHeader = () => hideHeader.value = route.meta.hideHeader || false;
    watch(route, updateHeader, { immediate: true });
    return {
      hideHeader,
    };
  },
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
    img {
      filter: invert(18%) sepia(65%) saturate(6217%) hue-rotate(224deg) brightness(91%) contrast(109%);
    }

    h6 {
      color: #0044F1 !important;
    }
  }
}
</style>
