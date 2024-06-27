<template>
    <ion-page>
        <ion-content>
            <ion-card v-for="subscription in subscriptions">
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
                <ion-button fill="clear"
                    >{{ subscription.price1.amount }}€ /
                    {{ subscription.price1.interval }}</ion-button
                >
                <ion-button fill="clear"
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
} from "@ionic/vue";

import axios from "axios";

export default {
    data() {
        return {
            subscriptions: [],
        };
    },

    async mounted() {
        let response;
        try {
            response = await axios.get(
                "http://127.0.0.1:8001/api/stripe/subscriptions",
                {}
            );
            this.subscriptions = response.data;
            console.log(this.subscriptions);
        } catch (error) {
            console.log(error);
        }
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
    },
};
</script>

<style scoped>
.card-image {
    border-radius: 3px;
}
</style>
