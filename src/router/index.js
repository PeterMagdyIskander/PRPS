import { createRouter, createWebHistory } from "vue-router";
import store from "../store/index.js";
import LandingPageView from "@/views/LandingPageView.vue";
import LoggedInView from "@/views/LoggedInView.vue";
import LoginView from "../views/LoginView.vue";
import SignupView from "../views/SignupView.vue";
import CoachView from "../views/CoachView.vue";
import NotificationsView from "../views/NotificationsView.vue";
import AllCoachesView from "../views/AllCoachesView.vue";
import MyBookingsView from "@/views/MyBookingsView.vue";
import FAQView from "@/views/FAQView.vue";

const routes = [
  {
    path: "/",
    name: "landing-page",
    component: LandingPageView,
    meta: {
      title: `Welcome, ${store.state.user?.name}! 🙌`,
      subtitle: "Let's connect you with the best career coach!",
      showBackButton: false,
      hideHeader: true
    },
  },
  {
    path: "/home",
    name: "home",
    component: LoggedInView,
    meta: {
      title: `Welcome, ${store.state.user?.name}! 🙌`,
      subtitle: "Let's connect you with the best career coach!",
      showBackButton: false,
      hideHeader: false
    },
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
    meta: {
      title: "Login",
      subtitle: "Welcome back! Your next career move awaits.",
      showBackButton: false
    },
  },
  {
    path: "/signup",
    name: "signup",
    component: SignupView,
    meta: { title: "Create account", subtitle: "Welcome to PRPS! Your future starts here.", showBackButton: false },

  },
  {
    path: "/all-coaches",
    name: "allCoaches",
    component: AllCoachesView,
    meta: { title: 'Career coaches', subtitle: "We've matched you with the best career coach to help you achieve your goals!", showBackButton: true },
  },
  {
    path: "/coach/:id",
    name: "coach",
    component: CoachView,
    meta: { showBackButton: true },
  },
  {
    path: "/notifications",
    name: "notifications",
    component: NotificationsView,
    meta: { hideHeader: true }
  },
  {
    path: "/bookings",
    name: "bookings",
    component: MyBookingsView,
    meta: { hideHeader: true }
  },
  {
    path: "/faq",
    name: "faq",
    component: FAQView,
    meta: { title: 'FAQ', subtitle: "", showBackButton: false },
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

  if (to.fullPath==='/home') {
     to.meta.title=`Welcome, ${store.state.user?.name}! 🙌`
    }


  if (to.matched.some((record) => record.meta.requiresAuth) && (!isAuthenticated || !isAdmin)) {
    next({
      path: "/",
      query: { redirect: to.fullPath },
    });
  } else {
    next();
  }
});
export default router;
