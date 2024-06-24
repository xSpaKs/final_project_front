<template>
    <ion-card>
        <GMapMap
            :center="{ lat, lng }"
            :zoom="zoom"
            map-type-id="roadmap"
            style="width: 100vw; height: 20rem"
            :options="{
                zoomControl: true,
                mapTypeControl: true,
                scaleControl: true,
                streetViewControl: true,
                rotateControl: true,
                fullscreenControl: true,
            }"
        />
    </ion-card>
</template>

<script>
import { IonCard } from "@ionic/vue";
export default {
    props: ["lat", "lng", "zoom"],

    components: { IonCard },
};
</script>
