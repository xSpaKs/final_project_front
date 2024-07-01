<template>
    <ion-page>
        <ion-content>
            <ion-card>
                <ion-card-header>
                    <ion-card-subtitle>Register</ion-card-subtitle>
                </ion-card-header>
                <ion-card-content>
                    <ion-item>
                        <ion-input
                            label="Name : "
                            v-model.trim="formData.name"
                        ></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-input
                            label="Email : "
                            v-model.trim="formData.email"
                        ></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-input
                            type="password"
                            label="Password : "
                            v-model.trim="formData.password"
                            ><ion-input-password-toggle slot="end"
                        /></ion-input>
                    </ion-item>
                    <ion-button expand="full" slot="primary" @click="register"
                        >Create my account</ion-button
                    >
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
    IonCardSubtitle,
    IonCardContent,
    IonItem,
    IonLabel,
    IonInput,
    IonInputPasswordToggle,
    IonButton,
} from "@ionic/vue";

import axios from "axios";

import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";

export default {
    setup: () => ({ v$: useVuelidate() }),

    data() {
        return {
            formData: {
                name: "Aran Hiblot",
                email: "aran@gmail.com",
                password: "aaaaaaaa",
            },
        };
    },
    methods: {
        async register() {
            // Vuelidate check form entries
            this.v$.formData.$touch();

            if (this.v$.formData.$invalid) {
                console.log("Form is invalid");
                return;
            }

            try {
                // Ask the API to register
                const response = await axios.post(
                    "http://127.0.0.1:8001/api/register",
                    {
                        name: this.formData.name,
                        email: this.formData.email,
                        password: this.formData.password,
                    }
                );

                // Store the user with localStorage
                localStorage.setItem("user", JSON.stringify(response.data));

                // Redirect to user page when registered
                this.$router.push("user");
            } catch (error) {
                console.log(error);
            }
        },
    },

    validations: {
        formData: {
            name: { required },
            email: { required, email },
            password: { required },
        },
    },

    components: {
        IonPage,
        IonContent,
        IonCard,
        IonCardHeader,
        IonCardSubtitle,
        IonCardContent,
        IonItem,
        IonLabel,
        IonInput,
        IonInputPasswordToggle,
        IonButton,
    },
};
</script>
