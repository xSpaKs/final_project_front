<template>
    <ion-card>
        <ion-card-header>
            <ion-card-subtitle>My informations</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
            <ion-list>
                <ion-item lines="none">
                    <ion-thumbnail slot="start">
                        <ion-icon name="person-outline"></ion-icon>
                    </ion-thumbnail>
                    <ion-label>{{ authStore.user.name }}</ion-label>
                </ion-item>

                <ion-item lines="none">
                    <ion-thumbnail slot="start">
                        <ion-icon name="mail-outline"></ion-icon>
                    </ion-thumbnail>
                    <ion-label>{{ authStore.user.email }}</ion-label>
                </ion-item>
            </ion-list>
        </ion-card-content>
    </ion-card>
</template>

<script>
import {
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonList,
    IonItem,
    IonThumbnail,
    IonLabel,
    IonCardContent,
    IonText,
    IonIcon,
} from "@ionic/vue";

import { useAuthStore } from "../stores/auth";

export default {
    data() {
        return {
            authStore: useAuthStore(),
        };
    },

    components: {
        IonCard,
        IonCardHeader,
        IonCardSubtitle,
        IonList,
        IonItem,
        IonThumbnail,
        IonLabel,
        IonCardContent,
        IonText,
        IonIcon,
    },
};
</script>

<style scoped>
ion-text {
    color: white;
    font-size: 16px;
}

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
