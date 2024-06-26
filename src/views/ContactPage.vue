<template>
    <ion-page>
        <ion-content>
            <Coordinates />
            <FormContact />
            <Map :lat="48.87052665909432" :lng="2.363183774266225" :zoom="19" />
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
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonTextarea,
    IonButton,
    IonText,
} from "@ionic/vue";

import Coordinates from "../components/Coordinates.vue";
import Map from "../components/Map.vue";
import FormContact from "../components/FormContact.vue";

export default {
    components: {
        IonPage,
        IonContent,
        IonCard,
        IonCardHeader,
        IonCardTitle,
        IonCardSubtitle,
        IonCardContent,
        IonList,
        IonItem,
        IonLabel,
        IonInput,
        IonTextarea,
        IonButton,
        IonText,
        Coordinates,
        Map,
        FormContact,
    },
};
</script>
