<template>
    <ion-card>
        <ion-card-header>
            <ion-card-subtitle>Our coordinates</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
            <ion-list>
                <ion-item lines="full">
                    <ion-thumbnail slot="start">
                        <ion-icon name="map-outline"></ion-icon>
                    </ion-thumbnail>
                    <ion-label>19 rue Yves Toudic, 75011 Paris</ion-label>
                </ion-item>

                <ion-item lines="full">
                    <ion-thumbnail slot="start">
                        <ion-icon name="call-outline"></ion-icon>
                    </ion-thumbnail>
                    <ion-label>01 42 41 97 76</ion-label>
                </ion-item>

                <ion-item lines="none">
                    <ion-thumbnail slot="start">
                        <ion-icon name="mail-outline"></ion-icon>
                    </ion-thumbnail>
                    <ion-label>contact@ecole-webstart.com</ion-label>
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
