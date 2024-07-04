<template>
    <ion-card>
        <ion-card-content>
            <ion-button
                id="delete-alert"
                color="danger"
                expand="block"
                fill="solid"
                ><ion-icon name="trash-outline"></ion-icon>Delete my
                account</ion-button
            >
            <ion-alert
                trigger="delete-alert"
                header="Confirm the deleting of your account"
                message="Your account and all subsequent informations will be deleted."
                :buttons="[
                    {
                        text: 'Delete',
                        role: 'destructive',
                        handler: confirmDelete,
                    },
                ]"
            ></ion-alert>
        </ion-card-content>
    </ion-card>
</template>

<script>
import {
    IonButton,
    IonCard,
    IonCardContent,
    IonIcon,
    IonAlert,
} from "@ionic/vue";

import axios from "axios";
import { useAuthStore } from "../stores/auth";

export default {
    data() {
        return {
            authStore: useAuthStore(),
        };
    },
    methods: {
        async confirmDelete() {
            try {
                const response = axios.post(
                    "http://127.0.0.1:8001/api/delete-account",
                    {},
                    {
                        headers: {
                            Authorization: `Bearer ${this.authStore.user.token}`,
                        },
                    }
                );

                this.authStore.logout();
                this.$router.push("/");
            } catch (error) {
                console.log(error);
            }
        },
    },
    components: { IonButton, IonCard, IonCardContent, IonIcon, IonAlert },
};
</script>

<style scoped>
ion-icon {
    padding-right: 10px;
}
</style>
