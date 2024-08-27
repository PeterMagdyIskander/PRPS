import { createRouter, createWebHistory } from "vue-router";
import store from "../store/index.js";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Navigation guard
router.beforeEach((to, from, next) => {
  const user = store.state.user; // Get the user object from the state
  const isAuthenticated = user !== null; // Check if the user is authenticated
  const isAdmin = user && user.role === 'ADMIN'; // Check if the user has the admin role

  if (to.matched.some((record) => record.meta.requiresAuth) && (!isAuthenticated || !isAdmin))  {
    next({
      path: "/",
      query: { redirect: to.fullPath },
    });
  } else {
    next();
  }
});
export default router;
