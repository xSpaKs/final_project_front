<template>
    <ion-card>
        <ion-card-header>
            <ion-card-subtitle>User informations</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
            <ion-list>
                <ion-item lines="none">
                    <ion-thumbnail slot="start">
                        <ion-icon name="person-outline"></ion-icon>
                    </ion-thumbnail>
                    <ion-label>{{ user.name }}</ion-label>
                </ion-item>

                <ion-item lines="none">
                    <ion-thumbnail slot="start">
                        <ion-icon name="mail-outline"></ion-icon>
                    </ion-thumbnail>
                    <ion-label>{{ user.email }}</ion-label>
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

export default {
    props: ["user"],

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
