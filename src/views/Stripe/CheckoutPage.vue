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
                    </ion-list>
                    <ion-item>
                        <ion-input
                            label="Discount : "
                            label-placement="floating"
                            v-model.trim="discount.name"
                        ></ion-input>
                        <ion-text color="success" v-if="discount.amount"
                            >You have a {{ discount.amount }}%
                            discount</ion-text
                        >
                        <ion-button fill="clear" @click="addDiscount"
                            >Add the discount</ion-button
                        >
                    </ion-item>
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
                                    ? product.price1.amount + " / year"
                                    : product.price2.amount + " / month"
                            }}</ion-label>
                        </ion-item>
                    </ion-list>
                    <ion-item>
                        <ion-input
                            label="Discount : "
                            label-placement="floating"
                            v-model.trim="discount.name"
                        ></ion-input>
                        <ion-text color="success" v-if="discount.amount"
                            >You have a {{ discount.amount }}%
                            discount</ion-text
                        >
                        <ion-button fill="clear" @click="addDiscount"
                            >Add the discount</ion-button
                        >
                    </ion-item>
                </ion-card-content>
                <ion-button @click="submit" expand="full"
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
            discount: {
                name: "",
                amount: "",
            },
        };
    },

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
                const response = await axios.get(
                    "http://127.0.0.1:8001/api/stripe/subscriptions/" +
                        this.$route.query.product,
                    {}
                );

                this.product = response.data;
            } catch (error) {
                console.log(error);
            }

            this.loaded = true;
        },

        async addDiscount() {
            try {
                const response = await axios.get(
                    "http://127.0.0.1:8001/api/discounts/" + this.discount.name,
                    {}
                );

                if (response.data) {
                    this.discount.amount = response.data.amount;
                }
            } catch (error) {
                console.log(error);
            }
        },

        async submit() {
            try {
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

                console.log(response.data);

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
