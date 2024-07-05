<template>
    <ion-page>
        <ion-content>
            <ion-card>
                <img
                    src="../../public/assets/images/solar-system.jpg"
                    alt="Image du système solaire"
                />
                <ion-card-header>
                    <ion-card-subtitle>
                        Welcome to Planetary
                    </ion-card-subtitle>
                    <ion-card-title
                        >Are you ready to own a planet ? (yes,
                        really)</ion-card-title
                    >
                </ion-card-header>
                <ion-card-content>
                    <ion-button
                        fill="clear"
                        router-link="/subscriptions"
                        class="link"
                        color="primary"
                        >Check out our subscriptions
                    </ion-button>
                </ion-card-content>
            </ion-card>
        </ion-content>
    </ion-page>
</template>

<script>
import {
    IonPage,
    IonContent,
    IonText,
    IonItem,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonCardSubtitle,
    IonButton,
    IonCardTitle,
} from "@ionic/vue";

export default {
    components: {
        IonPage,
        IonContent,
        IonText,
        IonItem,
        IonCard,
        IonCardHeader,
        IonCardContent,
        IonCardSubtitle,
        IonButton,
        IonCardTitle,
    },
};
</script>

<style>
.link {
    text-decoration: underline;
}
</style>
