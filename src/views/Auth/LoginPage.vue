<template>
    <ion-page>
        <ion-content>
            <ion-card>
                <ion-card-header>
                    <ion-card-subtitle>Login</ion-card-subtitle>
                </ion-card-header>
                <ion-card-content>
                    <ion-item lines="full">
                        <ion-input
                            label="Email : "
                            label-placement="floating"
                            v-model.trim="formData.email"
                            @input="toggleInvalidCredentials"
                        />
                    </ion-item>
                    <span v-for="error in v$.formData.email.$errors">{{
                        error.$message
                    }}</span>
                    <ion-item lines="full">
                        <ion-input
                            type="password"
                            label="Password : "
                            label-placement="floating"
                            v-model.trim="formData.password"
                            @input="toggleInvalidCredentials"
                            ><ion-input-password-toggle slot="end" />
                        </ion-input>
                    </ion-item>
                    <span v-for="error in v$.formData.password.$errors">{{
                        error.$message
                    }}</span>
                    <span style="display: block" v-if="invalidCredentials"
                        >Invalid credentials</span
                    >

                    <ion-button expand="block" slot="primary" @click="login"
                        >Login</ion-button
                    >
                </ion-card-content>
            </ion-card>
            <ion-card>
                <ion-card-content>
                    <ion-text class="ion-text-center">
                        You do not have an account ?
                    </ion-text>
                    <ion-text color="primary" router-link="/register"
                        >Register</ion-text
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
    IonText,
} from "@ionic/vue";

import axios from "axios";
import { useAuthStore } from "../../stores/auth";

import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";

export default {
    setup: () => ({ v$: useVuelidate() }),

    data() {
        return {
            formData: {
                email: "",
                password: "",
            },

            invalidCredentials: false,
        };
    },

    // If user is already logged in, redirect to user page
    beforeRouteEnter(to, from, next) {
        if (JSON.parse(localStorage.getItem("user"))) {
            next("/user");
        } else {
            next();
        }
    },

    methods: {
        async login() {
            this.v$.formData.$touch(); // Vuelidate checks form inputs

            if (this.v$.formData.$invalid) {
                console.log("Form is invalid");
                return;
            }

            try {
                // HTTP request to check user informations
                const response = await axios.post(
                    "http://127.0.0.1:8001/api/login",
                    {
                        email: this.formData.email,
                        password: this.formData.password,
                    }
                );

                // Store the user with Pinia & localStorage
                const authStore = useAuthStore();
                authStore.login(response.data);

                this.$router.push("/user"); // Redirect to user page when logged in
            } catch (error) {
                if (error.response.status == 401) {
                    this.invalidCredentials = true;
                }
            }
        },

        toggleInvalidCredentials() {
            this.invalidCredentials = false;
        },
    },

    // Validations rules for Vuelidate
    validations: {
        formData: {
            email: { required, email },
            password: { required, minLength: minLength(8) },
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
        IonText,
    },
};
</script>

<style scoped>
span {
    color: red;
}
</style>
