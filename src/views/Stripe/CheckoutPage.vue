<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Checkout</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-button @click="handleCheckout">Pay with Stripe</ion-button>
        </ion-content>
    </ion-page>
</template>

<script>
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
} from "@ionic/vue";

import axios from "axios";

export default {
    data() {
        return {
            plan: 1,
            coupon: "",
        };
    },

    methods: {
        async submit() {
            let response;
            try {
                response = await axios.post(
                    import.meta.env.API_URL + "stripe/checkout",
                    {},
                    {
                        headers: {
                            Authorization: "Bearer 2|", // token sanctum
                        },
                    }
                );
            } catch (error) {
                console.log(error);
            }

            const stripeCheckoutUrl = response.data.url;
            window.location.replace(stripeCheckoutUrl);
        },
    },

    components: {
        IonPage,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonButton,
    },
};
</script>
