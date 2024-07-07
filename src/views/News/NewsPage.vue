<template>
    <ion-page>
        <ion-content>
            <ion-card
                v-for="single_news in news"
                @click="details(single_news.id)"
            >
                <ion-card-header>
                    <ion-card-title>{{ single_news.title }}</ion-card-title>
                </ion-card-header>
                <ion-card-content>
                    <ion-text class="truncate-text">{{
                        single_news.content
                    }}</ion-text>
                    <small>{{ single_news.created_at }}</small>
                </ion-card-content>
            </ion-card>
        </ion-content>
    </ion-page>
</template>

<script>
import {
    IonPage,
    IonContent,
    IonTitle,
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
            news: [],
        };
    },
    async mounted() {
        try {
            // HTTP request to get all the news
            const response = await axios.get(
                "http://127.0.0.1:8001/api/news",
                {}
            );
            this.news = response.data;
        } catch (error) {
            console.log(error);
        }
    },

    methods: {
        details(id) {
            this.$router.push("/news/" + id); // Redirect to a news page when clicking on it
        },
    },

    components: {
        IonPage,
        IonContent,
        IonTitle,
        IonCard,
        IonCardHeader,
        IonCardTitle,
        IonCardContent,
        IonText,
    },
};
</script>

<style scoped>
.truncate-text {
    display: -webkit-box;
    -webkit-line-clamp: 2; /* Number of lines to show */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: 3em; /* Adjust this value based on your line height */
}
</style>
