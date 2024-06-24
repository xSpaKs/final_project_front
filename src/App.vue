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
                <ion-list>
                    <ion-item router-link="/home">Home</ion-item>
                    <ion-item router-link="/news">News</ion-item>
                    <ion-item router-link="/contact">Contact</ion-item>
                </ion-list>
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
} from "@ionic/vue";

export default {
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
    },
};
</script>
