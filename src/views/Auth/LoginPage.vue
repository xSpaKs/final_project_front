<template>
    <ion-page>
        <ion-content>
            <ion-card>
                <ion-card-header>
                    <ion-card-subtitle>Login</ion-card-subtitle>
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
                            type="password"
                            label="Password : "
                            v-model.trim="formData.password"
                            ><ion-input-password-toggle
                                slot="end"
                            ></ion-input-password-toggle
                        ></ion-input>
                    </ion-item>
                    <ion-button expand="block" slot="primary" @click="login"
                        >Login</ion-button
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
import { useAuthStore } from "../../stores/auth";

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

    beforeRouteEnter(to, from, next) {
        if (JSON.parse(localStorage.getItem("user"))) {
            next("/user");
        } else {
            next();
        }
    },

    methods: {
        async login() {
            // Vuelidate check form entries
            this.v$.formData.$touch();

            if (this.v$.formData.$invalid) {
                console.log("Form is invalid");
                return;
            }

            try {
                // Ask the API to login
                const response = await axios.post(
                    "http://127.0.0.1:8001/api/login",
                    {
                        email: this.formData.email,
                        password: this.formData.password,
                    }
                );

                // Store the user with localStorage
                const authStore = useAuthStore();
                authStore.login(response.data);

                // Redirect to user page when logged in
                this.$router.push("/user");
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
