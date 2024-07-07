<template>
    <ion-card>
        <ion-card-header>
            <ion-card-subtitle>My subscriptions</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
            <ion-label style="color: white" v-if="payments.length < 1"
                >You do not have any active subscriptions</ion-label
            >
            <ion-list v-if="payments.length > 0">
                <ion-item v-for="payment in payments" lines="full">
                    <ion-thumbnail slot="start">
                        <ion-icon name="planet-outline" />
                    </ion-thumbnail>
                    <ion-label
                        >{{ payment.name }} : {{ payment.price / 100 }} € /
                        {{ payment.interval }}</ion-label
                    >
                </ion-item>
            </ion-list>
            <ion-button fill="clear" @click="stripe_portal()"
                >Manage my subscriptions</ion-button
            >
        </ion-card-content>
    </ion-card>
</template>

<script>
import {
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardContent,
    IonButton,
    IonList,
    IonText,
    IonItem,
    IonThumbnail,
    IonIcon,
    IonLabel,
} from "@ionic/vue";

import axios from "axios";
import { useAuthStore } from "../stores/auth";

export default {
    data() {
        return {
            authStore: useAuthStore(),
            payments: [],
        };
    },

    async mounted() {
        try {
            // HTTP request to get the payments from the current user
            const response = await axios.post(
                "http://127.0.0.1:8001/api/payments-from-user",
                {},
                {
                    headers: {
                        Authorization: `Bearer ${
                            JSON.parse(localStorage.getItem("user")).token
                        }`,
                    },
                }
            );
            this.payments = response.data;
        } catch (error) {
            console.log(error);
        }
    },

    methods: {
        async stripe_portal() {
            try {
                // HTTP request to get a link for Stripe Billing Portal
                const response = await axios.post(
                    "http://127.0.0.1:8001/api/stripe/customer",
                    {},
                    {
                        headers: {
                            Authorization: `Bearer ${
                                JSON.parse(localStorage.getItem("user")).token
                            }`,
                        },
                    }
                );

                // Redirect to the fetched link
                const stripeCheckoutUrl = response.data.url;
                window.location.replace(stripeCheckoutUrl);
            } catch (error) {
                console.log(error);
            }
        },
    },

    components: {
        IonCard,
        IonCardHeader,
        IonCardSubtitle,
        IonCardContent,
        IonButton,
        IonList,
        IonText,
        IonItem,
        IonThumbnail,
        IonIcon,
        IonLabel,
    },
};
</script>

<style scoped>
ion-thumbnail {
    display: flex;
    justify-content: center;
    align-items: center;
}

ion-icon {
    width: 50%;
    height: 50%;
}
</style>
