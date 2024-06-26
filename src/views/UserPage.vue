<template>
    <ion-page>
        <ion-content> </ion-content>
    </ion-page>
</template>

<script>
import { IonPage, IonContent } from "@ionic/vue";
import axios from "axios";

export default {
    async beforeRouteEnter() {
        try {
            response = await axios.get(
                import.meta.env.API_URL + "user",
                {},
                {
                    headers: {
                        Authorization: "Bearer 2|", // token sanctum
                    },
                }
            );
        } catch (error) {
            console.log(error);
            return;
        }
    },

    components: { IonPage, IonContent },
};
</script>
