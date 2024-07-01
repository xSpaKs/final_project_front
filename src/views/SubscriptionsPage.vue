<template>
    <ion-page>
        <ion-content>
            <ion-card v-if="!loaded">
                <ion-skeleton-text
                    :animated="true"
                    style="width: 100%; height: 150px"
                ></ion-skeleton-text>
                <ion-card-header>
                    <ion-skeleton-text
                        :animated="true"
                        style="width: 100px; height: 20px"
                    ></ion-skeleton-text>
                    <ion-card-subtitle
                        >Yearly or monthly subscriptions</ion-card-subtitle
                    >
                </ion-card-header>
                <ion-card-content class="no-scroll"> </ion-card-content>
                <div
                    style="
                        display: flex;
                        justify-content: space-around;
                        padding-bottom: 15px;
                    "
                >
                    <ion-skeleton-text
                        :animated="true"
                        style="width: 150px"
                    ></ion-skeleton-text>
                    <ion-skeleton-text
                        :animated="true"
                        style="width: 150px"
                    ></ion-skeleton-text>
                </div>
            </ion-card>
            <ion-card v-if="loaded" v-for="subscription in subscriptions">
                <img
                    alt="Image of the product"
                    :src="subscription.image"
                    class="card-image"
                />
                <ion-card-header>
                    <ion-card-title>{{ subscription.name }}</ion-card-title>
                    <ion-card-subtitle
                        >Yearly or monthly subscriptions</ion-card-subtitle
                    >
                </ion-card-header>
                <ion-card-content class="no-scroll"> </ion-card-content>
                <ion-button
                    fill="clear"
                    :router-link="{
                        path: '/checkout',
                        query: { product: subscription.id, type: 'year' },
                    }"
                    >{{ subscription.price1.amount }}€ /
                    {{ subscription.price1.interval }}</ion-button
                >
                <ion-button
                    fill="clear"
                    :router-link="{
                        path: '/checkout',
                        query: { product: subscription.id, type: 'month' },
                    }"
                    >{{ subscription.price2.amount }}€ /
                    {{ subscription.price2.interval }}</ion-button
                >
            </ion-card>
        </ion-content>
    </ion-page>
</template>

<script>
import {
    IonPage,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonText,
    IonButton,
    IonSkeletonText,
} from "@ionic/vue";

import axios from "axios";

export default {
    data() {
        return {
            loaded: false,
            subscriptions: [],
        };
    },

    async mounted() {
        try {
            const response = await axios.get(
                "http://127.0.0.1:8001/api/stripe/subscriptions",
                {}
            );
            this.subscriptions = response.data;
        } catch (error) {
            console.log(error);
        }

        this.loaded = true;
    },

    components: {
        IonPage,
        IonContent,
        IonCard,
        IonCardHeader,
        IonCardTitle,
        IonCardSubtitle,
        IonCardContent,
        IonText,
        IonButton,
        IonSkeletonText,
    },
};
</script>

<style scoped>
.card-image {
    width: 100%;
    border-radius: 3px;
    max-width: 400px;
}
</style>
