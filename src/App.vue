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
                <ion-title>Planetary</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-menu content-id="main-content" menu-id="main-menu">
            <ion-content>
                <ion-menu-toggle>
                    <ion-list>
                        <ion-item router-link="/home">Home</ion-item>
                        <ion-item router-link="/subscriptions"
                            >Subscriptions</ion-item
                        >
                        <ion-item router-link="/login">Login</ion-item>
                        <ion-item router-link="/register">Register</ion-item>
                        <ion-item @click="logout">Logout</ion-item>
                        <ion-item router-link="/news">News</ion-item>
                        <ion-item router-link="/contact">Contact</ion-item>
                    </ion-list>
                </ion-menu-toggle>
            </ion-content>
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
    IonHeader,
    IonContent,
    IonMenu,
    IonList,
    IonToolbar,
    IonTitle,
    IonItem,
    IonButtons,
    IonMenuButton,
    IonMenuToggle,
} from "@ionic/vue";

import axios from "axios";
import { useAuthStore } from "@/stores/auth.js";

export default {
    methods: {
        logout() {
            try {
                const authStore = useAuthStore();
                console.log(authStore.token);
                const response = axios.post(
                    "http://127.0.0.1:8001/api/logout",
                    {},
                    {
                        headers: {
                            Authorization: `Bearer ${authStore.token}`,
                        },
                    }
                );
            } catch (error) {
                console.log(error);
            }
        },
    },
    components: {
        IonApp,
        IonRouterOutlet,
        IonHeader,
        IonContent,
        IonMenu,
        IonList,
        IonToolbar,
        IonTitle,
        IonItem,
        IonButtons,
        IonMenuButton,
        IonMenuToggle,
    },
};
</script>
