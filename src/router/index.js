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
        meta: { title: "Planetary" },
    },
    {
        path: "/login",
        name: "Login",
        component: () => import("../views/Auth/LoginPage.vue"),
        meta: { title: "Login" },
    },
    {
        path: "/register",
        name: "Register",
        component: () => import("../views/Auth/RegisterPage.vue"),
        meta: { title: "Register" },
    },
    {
        path: "/user",
        name: "User",
        component: () => import("../views/UserPage.vue"),
        meta: { title: "My user page" },
    },
    {
        path: "/subscriptions",
        name: "Subcriptions",
        component: () => import("../views/SubscriptionsPage.vue"),
        meta: { title: "Subscriptions" },
    },
    {
        path: "/news",
        name: "News",
        component: () => import("../views/News/NewsPage.vue"),
        meta: { title: "News" },
    },
    {
        path: "/news/:id",
        name: "NewsDetails",
        component: () => import("../views/News/NewsDetailsPage.vue"),
        meta: { title: "News" },
    },
    {
        path: "/contact",
        name: "Contact",
        component: () => import("../views/ContactPage.vue"),
        meta: { title: "Contact us" },
    },
    {
        path: "/privacy-policy",
        name: "PrivacyPolicy",
        component: () => import("../views/Legals/PrivacyPolicy.vue"),
        meta: { title: "Privacy policy" },
    },
    {
        path: "/cgv",
        name: "CGV",
        component: () => import("../views/Legals/CGV.vue"),
        meta: { title: "CGV" },
    },
    {
        path: "/legal-mentions",
        name: "LegalMentions",
        component: () => import("../views/Legals/LegalMentions.vue"),
        meta: { title: "Legal mentions" },
    },
    {
        path: "/checkout",
        name: "Checkout",
        component: () => import("../views/Stripe/CheckoutPage.vue"),
        meta: { title: "Checkout" },
    },
    {
        path: "/checkout/cancel",
        name: "CheckoutCancel",
        component: () => import("../views/Stripe/CheckoutCancelPage.vue"),
        meta: { title: "Failed payment" },
    },
    {
        path: "/checkout/success",
        name: "CheckoutSuccess",
        component: () => import("../views/Stripe/CheckoutSuccessPage.vue"),
        meta: { title: "Succeedeed payment" },
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
