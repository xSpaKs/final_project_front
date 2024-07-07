<template>
    <ion-page>
        <ion-content>
            <ion-back-button defaultHref="/home">Hey</ion-back-button>
            <ion-card v-if="!loaded">
                <ion-card-header>
                    <ion-skeleton-text
                        :animated="true"
                        style="width: 120px"
                    ></ion-skeleton-text>
                </ion-card-header>
                <ion-card-content>
                    <ion-list>
                        <ion-item lines="full">
                            <ion-thumbnail slot="start">
                                <ion-icon name="time-outline"></ion-icon>
                            </ion-thumbnail>
                            <ion-skeleton-text
                                :animated="true"
                                style="width: 80px"
                            ></ion-skeleton-text>
                        </ion-item>
                        <ion-item lines="full">
                            <ion-thumbnail slot="start">
                                <ion-icon name="planet-outline"></ion-icon>
                            </ion-thumbnail>
                            <ion-skeleton-text
                                :animated="true"
                                style="width: 80px"
                            ></ion-skeleton-text>
                        </ion-item>
                        <ion-item lines="full">
                            <ion-thumbnail slot="start">
                                <ion-icon name="card-outline"></ion-icon>
                            </ion-thumbnail>
                            <ion-skeleton-text
                                :animated="true"
                                style="width: 150px"
                            ></ion-skeleton-text>
                        </ion-item>
                        <ion-item lines="full">
                            <ion-thumbnail slot="start">
                                <ion-icon name="repeat-outline"></ion-icon>
                            </ion-thumbnail>
                            <ion-skeleton-text
                                :animated="true"
                                style="width: 80px"
                            ></ion-skeleton-text>
                        </ion-item>
                    </ion-list>
                </ion-card-content>
            </ion-card>

            <ion-card v-if="loaded">
                <ion-card-header>
                    <ion-card-subtitle
                        >{{ type.charAt(0).toUpperCase() + type.slice(1) }}ly
                        subscription</ion-card-subtitle
                    >
                </ion-card-header>
                <ion-card-content>
                    <ion-list>
                        <ion-item lines="full">
                            <ion-thumbnail slot="start">
                                <ion-icon name="time-outline"></ion-icon>
                            </ion-thumbnail>
                            <ion-label
                                >First payment : {{ currentDate() }}</ion-label
                            >
                        </ion-item>
                        <ion-item lines="full">
                            <ion-thumbnail slot="start">
                                <ion-icon name="planet-outline"></ion-icon>
                            </ion-thumbnail>
                            <ion-label>{{ product.name }}</ion-label>
                        </ion-item>
                        <ion-item lines="full">
                            <ion-thumbnail slot="start">
                                <ion-icon name="card-outline"></ion-icon>
                            </ion-thumbnail>
                            <ion-label>{{
                                type == "year"
                                    ? product.price1.amount + "€ / year"
                                    : product.price2.amount + "€ / month"
                            }}</ion-label>
                        </ion-item>
                        <ion-item lines="full">
                            <ion-thumbnail slot="start">
                                <ion-icon name="repeat-outline"></ion-icon>
                            </ion-thumbnail>
                            <ion-label
                                >Next payment : {{ futureDate() }}</ion-label
                            >
                        </ion-item>
                    </ion-list>
                </ion-card-content>
                <ion-button @click="submit" expand="block"
                    >Pay with Stripe</ion-button
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
    IonItem,
    IonInput,
    IonButton,
    IonList,
    IonIcon,
    IonThumbnail,
    IonLabel,
    IonText,
    IonSkeletonText,
    IonBackButton,
} from "@ionic/vue";

import axios from "axios";

export default {
    data() {
        return {
            loaded: false,
            product: {
                name: "",
                price1: { amount: 0 },
                price2: { amount: 0 },
            },
            type: "",
        };
    },

    // If user is not logged in, redirect to login page
    beforeRouteEnter(to, from, next) {
        if (!JSON.parse(localStorage.getItem("user"))) {
            next("/login");
        } else {
            next();
        }
    },

    mounted() {
        this.loadProduct();
        this.loadType();
    },

    methods: {
        // Return current date
        currentDate() {
            const date = new Date();
            const day = date.getDate().toString().padStart(2, "0");
            const month = (date.getMonth() + 1).toString().padStart(2, "0");
            const year = date.getFullYear();

            return `${day}/${month}/${year}`;
        },

        // Return the date in 1 month or 1 year, based on user's choice
        futureDate() {
            const date = new Date();
            const day = date.getDate().toString().padStart(2, "0");
            let month = (date.getMonth() + 1).toString().padStart(2, "0");
            let year = date.getFullYear();

            if (this.type == "month") {
                month++;
                month = month.toString().padStart(2, "0");
                if (month == 13) {
                    month = "00";
                    year++;
                }
            } else {
                year++;
            }

            return `${day}/${month}/${year}`;
        },

        // Check URL's type validity
        loadType() {
            if (
                this.$route.query.type != "month" &&
                this.$route.query.type != "year"
            ) {
                this.$router.push("/subscriptions");
            }

            this.type = this.$route.query.type;
        },

        async loadProduct() {
            try {
                // HTTP request to get the subscription infos, based on URL parameter
                const response = await axios.get(
                    "http://127.0.0.1:8001/api/stripe/subscriptions/" +
                        this.$route.query.product,
                    {}
                );

                this.product = response.data;
            } catch (error) {
                this.$router.push("/subscriptions");
            }

            this.loaded = true;
        },

        async submit() {
            try {
                // HTTP request to get the URL of a Stripe Session
                const response = await axios.post(
                    "http://127.0.0.1:8001/api/stripe/checkout",
                    {
                        product: this.product.id,
                        subscription_type: this.type,
                        discount: this.discount,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${
                                JSON.parse(localStorage.getItem("user")).token
                            }`,
                        },
                    }
                );

                // Redirect to Stripe's URL
                const stripeCheckoutUrl = response.data.url;
                window.location.replace(stripeCheckoutUrl);
            } catch (error) {
                console.log(error);
            }
        },
    },

    components: {
        IonPage,
        IonContent,
        IonCard,
        IonCardHeader,
        IonCardTitle,
        IonCardSubtitle,
        IonCardContent,
        IonItem,
        IonInput,
        IonButton,
        IonList,
        IonIcon,
        IonThumbnail,
        IonLabel,
        IonText,
        IonSkeletonText,
        IonBackButton,
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

ion-back-button {
    padding-top: 5px;
    height: 25px;
}
</style>
