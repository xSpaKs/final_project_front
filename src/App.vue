<template>
    <ion-app>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-menu-button
                        autoHide="false"
                        menu="main-menu"
                    ></ion-menu-button>
                </ion-buttons>
                <ion-title router-link="/">Planetary</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-menu content-id="main-content" menu-id="main-menu">
            <ion-menu-toggle>
                <ion-list>
                    <ion-item
                        class="ion-activatable ripple-parent rectangle"
                        router-link="/"
                        ><ion-ripple-effect></ion-ripple-effect
                        ><ion-text>Home</ion-text></ion-item
                    >
                    <ion-item
                        class="ion-activatable ripple-parent rectangle"
                        router-link="/subscriptions"
                        ><ion-ripple-effect></ion-ripple-effect
                        ><ion-icon
                            style="color: white; padding-right: 15px"
                            name="planet-outline"
                        ></ion-icon
                        ><ion-text>Subscriptions</ion-text></ion-item
                    >
                    <ion-item
                        class="ion-activatable ripple-parent rectangle"
                        v-if="!authStore.isAuthenticated"
                        router-link="/login"
                        ><ion-ripple-effect></ion-ripple-effect
                        ><ion-text>Login</ion-text></ion-item
                    >
                    <ion-item
                        class="ion-activatable ripple-parent rectangle"
                        v-if="!authStore.isAuthenticated"
                        router-link="/register"
                        ><ion-ripple-effect></ion-ripple-effect
                        ><ion-text>Register</ion-text></ion-item
                    >
                    <ion-item
                        class="ion-activatable ripple-parent rectangle"
                        v-if="authStore.isAuthenticated"
                        router-link="/user"
                        ><ion-ripple-effect></ion-ripple-effect
                        ><ion-icon
                            style="color: white; padding-right: 15px"
                            name="person-outline"
                        ></ion-icon
                        ><ion-text>My profile</ion-text></ion-item
                    >
                    <ion-item
                        class="ion-activatable ripple-parent rectangle"
                        router-link="/news"
                        ><ion-ripple-effect></ion-ripple-effect
                        ><ion-icon
                            style="color: white; padding-right: 15px"
                            name="newspaper-outline"
                        ></ion-icon
                        ><ion-text>News</ion-text></ion-item
                    >
                    <ion-item
                        class="ion-activatable ripple-parent rectangle"
                        router-link="/contact"
                        ><ion-ripple-effect></ion-ripple-effect
                        ><ion-icon
                            style="color: white; padding-right: 15px"
                            name="mail-open-outline"
                        ></ion-icon
                        ><ion-text>Contact us</ion-text></ion-item
                    >
                    <ion-item
                        class="ion-activatable ripple-parent rectangle"
                        router-link="/legal-mentions"
                        ><ion-ripple-effect></ion-ripple-effect
                        ><ion-text>Legal Mentions</ion-text></ion-item
                    >
                    <ion-item
                        class="ion-activatable ripple-parent rectangle"
                        router-link="/cgv"
                        ><ion-ripple-effect></ion-ripple-effect
                        ><ion-text>CGV</ion-text></ion-item
                    >
                    <ion-item
                        class="ion-activatable ripple-parent rectangle"
                        router-link="/privacy-policy"
                        ><ion-ripple-effect></ion-ripple-effect
                        ><ion-text>Privacy policy</ion-text></ion-item
                    >
                    <ion-item
                        class="ion-activatable ripple-parent rectangle"
                        v-if="authStore.isAuthenticated"
                        ><ion-ripple-effect></ion-ripple-effect>
                        <ion-icon
                            name="log-out-outline"
                            style="color: red"
                        ></ion-icon>
                        <ion-item @click="logout">Logout</ion-item>
                    </ion-item>
                </ion-list>
            </ion-menu-toggle>
        </ion-menu>
        <ion-content id="main-content">
            <ion-router-outlet />
        </ion-content>
    </ion-app>
</template>

<script>
import {
    IonApp,
    IonRouterOutlet,
    IonContent,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonItem,
    IonIcon,
    IonMenu,
    IonList,
    IonMenuToggle,
    IonText,
    IonRippleEffect,
    IonTitle,
    IonMenuButton,
} from "@ionic/vue";

import axios from "axios";
import { useAuthStore } from "@/stores/auth";

export default {
    data() {
        return {
            authStore: useAuthStore(),
        };
    },

    mounted() {
        this.authStore.loadUserFromLocalStorage();
    },

    methods: {
        logout() {
            try {
                const response = axios.post(
                    "http://127.0.0.1:8001/api/logout",
                    {},
                    {
                        headers: {
                            Authorization: `Bearer ${this.authStore.user.token}`,
                        },
                    }
                );

                this.authStore.logout();
                this.$router.push("/");
            } catch (error) {
                console.log(error);
            }
        },
    },
    components: {
        IonApp,
        IonRouterOutlet,
        IonContent,
        IonHeader,
        IonToolbar,
        IonButtons,
        IonItem,
        IonIcon,
        IonMenu,
        IonList,
        IonMenuToggle,
        IonText,
        IonRippleEffect,
        IonTitle,
        IonMenuButton,
    },
};
</script>
