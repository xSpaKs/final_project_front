import { createRouter, createWebHistory } from "@ionic/vue-router";

import HomePage from "../views/HomePage.vue";

const routes = [
    {
        path: "/",
        redirect: "/home",
    },
    {
        path: "/home",
        name: "Home",
        component: HomePage,
    },
    {
        path: "/login",
        name: "Login",
        component: () => import("../views/Auth/LoginPage.vue"),
    },
    {
        path: "/register",
        name: "Register",
        component: () => import("../views/Auth/RegisterPage.vue"),
    },
    {
        path: "/user",
        name: "User",
        component: () => import("../views/UserPage.vue"),
    },
    {
        path: "/subscriptions",
        name: "Subcriptions",
        component: () => import("../views/SubscriptionsPage.vue"),
    },
    {
        path: "/news",
        name: "News",
        component: () => import("../views/News/NewsPage.vue"),
    },
    {
        path: "/news/:id",
        name: "NewsDetails",
        component: () => import("../views/News/NewsDetailsPage.vue"),
    },
    {
        path: "/contact",
        name: "Contact",
        component: () => import("../views/ContactPage.vue"),
    },
    {
        path: "/privacy-policy",
        name: "PrivacyPolicy",
        component: () => import("../views/Legals/PrivacyPolicy.vue"),
    },
    {
        path: "/cgv",
        name: "CGV",
        component: () => import("../views/Legals/CGV.vue"),
    },
    {
        path: "/legal-mentions",
        name: "LegalMentions",
        component: () => import("../views/Legals/LegalMentions.vue"),
    },
    {
        path: "/checkout",
        name: "Checkout",
        component: () => import("../views/Stripe/CheckoutPage.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
