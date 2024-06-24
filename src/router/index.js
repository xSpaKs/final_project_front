import { createRouter, createWebHistory } from "@ionic/vue-router";

import HomePage from "../views/HomePage.vue";

import SubcriptionsPage from "../views/SubscriptionsPage.vue";
import NewsPage from "../views/News/NewsPage.vue";
import NewsDetailsPage from "../views/News/NewsDetailsPage.vue";
import ContactPage from "../views/ContactPage.vue";

import PrivacyPolicy from "../views/Legals/LegalMentions.vue";
import CGV from "../views/Legals/CGV.vue";
import LegalMentions from "../views/Legals/LegalMentions.vue";

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
        path: "/subscriptions",
        name: "Subcriptions",
        component: SubcriptionsPage,
    },
    {
        path: "/news",
        name: "News",
        component: NewsPage,
    },
    {
        path: "/news/:id",
        name: "NewsDetails",
        component: NewsDetailsPage,
    },
    {
        path: "/contact",
        name: "Contact",
        component: ContactPage,
    },
    {
        path: "/privacy-policy",
        name: "PrivacyPolicy",
        component: PrivacyPolicy,
    },
    {
        path: "/cgv",
        name: "CGV",
        component: CGV,
    },
    {
        path: "/legal-mentions",
        name: "LegalMentions",
        component: LegalMentions,
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
