<template>
    <ion-page>
        <ion-content>
            <ion-card>
                <ion-card-header>
                    <ion-card-title>Login</ion-card-title>
                </ion-card-header>
                <ion-card-content>
                    <ion-item>
                        <ion-input
                            label="Email : "
                            v-model.trim="formData.email"
                        ></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-input
                            label="Password : "
                            v-model.trim="formData.password"
                        ></ion-input>
                    </ion-item>
                    <ion-button slot="primary" @click="login">Login</ion-button>
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
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
} from "@ionic/vue";

import axios from "axios";

import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";

export default {
    setup: () => ({ v$: useVuelidate() }),

    data() {
        return {
            formData: {
                email: "aran@gmail.com",
                password: "aaaaaaaa",
            },
        };
    },
    methods: {
        async login() {
            this.v$.formData.$touch();

            if (this.v$.formData.$invalid) {
                console.log("Form is invalid");
                return;
            }

            let response;
            try {
                response = await axios.post("http://127.0.0.1:8001/api/login", {
                    email: this.formData.email,
                    password: this.formData.password,
                });
            } catch (error) {
                console.log(error);
            }
        },
    },

    validations: {
        formData: {
            email: { required, email },
            password: { required },
        },
    },

    components: {
        IonPage,
        IonContent,
        IonCard,
        IonCardHeader,
        IonCardTitle,
        IonCardContent,
        IonItem,
        IonLabel,
        IonInput,
        IonButton,
    },
};
</script>
