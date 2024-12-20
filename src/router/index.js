import { createRouter, createWebHistory } from "vue-router";
import store from "../store/index.js";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import SignupView from "../views/SignupView.vue";
import CoachView from "../views/CoachView.vue";
import AllCoachesView from "../views/AllCoachesView.vue";
import DayMonthYearPicker from "@/components/calendars/dayMonthYearPicker/DayMonthYearPicker.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignupView,
  },
  {
    path: "/all-coaches",
    name: "allCoaches",
    component: AllCoachesView,
  },
  {
    path: "/coach/:id",
    name: "coach",
    component: CoachView,
  },
  {
    path: "/calendar",
    name: "calendar",
    component: DayMonthYearPicker,
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
