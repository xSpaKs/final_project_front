<template>
    <ion-page>
        <ion-content>
            <ion-card>
                <ion-card-header>
                    <ion-card-title>{{ news.title }}</ion-card-title>
                </ion-card-header>
                <ion-card-content>
                    <ion-text>{{ news.content }}</ion-text>
                    <small>{{ news.created_at }}</small>
                </ion-card-content>
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
    IonCardContent,
    IonText,
} from "@ionic/vue";
import axios from "axios";

export default {
    data() {
        return {
            news: {},
        };
    },
    async mounted() {
        let response;
        try {
            response = await axios.get(
                "http://127.0.0.1:8001/api/news/" + this.$route.params.id,
                {}
            );
            this.news = response.data;
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
        IonCardContent,
        IonText,
    },
};
</script>
