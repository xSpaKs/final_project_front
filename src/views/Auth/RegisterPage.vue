<template>
    <ion-page>
        <ion-content>
            <ion-card>
                <ion-card-title>Register</ion-card-title>
                <ion-card-content>
                    <ion-item>
                        <ion-label>Name : </ion-label>
                        <ion-input v-model="name"></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label>Email : </ion-label>
                        <ion-input v-model="email"></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label>Password : </ion-label>
                        <ion-input v-model="password"></ion-input>
                    </ion-item>
                    <ion-button @click="register">Create my account</ion-button>
                </ion-card-content>
            </ion-card>
        </ion-content>
    </ion-page>
</template>

<script>
import {
    IonPage,
    IonContent,
    IonCard,
    IonCardTitle,
    IonCardContent,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
} from "@ionic/vue";
import axios from "axios";

export default {
    data() {
        return {
            name: "Aran Hiblot",
            email: "aran@gmail.com",
            password: "aaaaaaaa",
        };
    },
    methods: {
        async register() {
            let response;
            try {
                response = await axios.post(
                    "http://127.0.0.1:8001/api/register",
                    {
                        name: this.name,
                        email: this.email,
                        password: this.password,
                    }
                );
            } catch (error) {
                console.log(error);
            }
        },
    },
    components: {
        IonPage,
        IonContent,
        IonCard,
        IonCardTitle,
        IonCardContent,
        IonItem,
        IonLabel,
        IonInput,
        IonButton,
    },
};
</script>
