<template>
    <ion-page>
        <ion-content>
            <ion-card>
                <ion-card-header>
                    <ion-card-subtitle
                        >Subscription succeeded</ion-card-subtitle
                    >
                </ion-card-header>
                <ion-card-content>
                    <ion-item lines="none">
                        <ion-icon
                            style="color: greenyellow"
                            name="checkbox-outline"
                        ></ion-icon>
                        <ion-text>You are now subscribed !</ion-text>
                    </ion-item>
                </ion-card-content>
                <ion-item lines="none">
                    <ion-text class="redirect"
                        >You will be redirected...</ion-text
                    >
                </ion-item>
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
    IonCardSubtitle,
    IonItem,
    IonIcon,
    IonText,
    IonCardContent,
} from "@ionic/vue";

export default {
    mounted() {
        // After 5 seconds, redirect to user page
        setTimeout(() => {
            this.$router.push("/user");
        }, 5000);
    },

    components: {
        IonPage,
        IonContent,
        IonCard,
        IonCardHeader,
        IonCardSubtitle,
        IonItem,
        IonIcon,
        IonText,
        IonCardContent,
    },
};
</script>

<style scoped>
ion-icon {
    padding-right: 15px;
}
</style>
