<template>
    <ion-page>
        <ion-content>
            <ion-card>
                <ion-card-header>
                    <ion-card-subtitle>Register</ion-card-subtitle>
                </ion-card-header>
                <ion-card-content>
                    <ion-item lines="full">
                        <ion-input
                            label="Name : "
                            label-placement="floating"
                            v-model.trim="formData.name"
                        ></ion-input>
                    </ion-item>
                    <span v-for="error in v$.formData.name.$errors">
                        {{ error.$message }}
                    </span>
                    <ion-item lines="full">
                        <ion-input
                            label="Email : "
                            label-placement="floating"
                            v-model.trim="formData.email"
                            @input="toggleUserExists"
                        ></ion-input>
                    </ion-item>
                    <span v-for="error in v$.formData.email.$errors">{{
                        error.$message
                    }}</span>
                    <span style="display: block" v-if="userExists"
                        >Email is not available</span
                    >
                    <ion-item lines="full">
                        <ion-input
                            type="password"
                            label="Password : "
                            label-placement="floating"
                            v-model.trim="formData.password"
                            ><ion-input-password-toggle slot="end"
                        /></ion-input>
                    </ion-item>
                    <span v-for="error in v$.formData.password.$errors">{{
                        error.$message
                    }}</span>
                    <ion-button expand="block" slot="primary" @click="register"
                        >Create my account</ion-button
                    >
                </ion-card-content>
            </ion-card>
            <ion-card>
                <ion-card-content>
                    <ion-text class="ion-text-center">
                        You already have an account ?
                    </ion-text>
                    <ion-text class="link" color="primary" router-link="/Login"
                        >Login</ion-text
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
            authStore: useAuthStore(),
            formData: {
                name: "",
                email: "",
                password: "",
            },
            userExists: false,
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
        async register() {
            this.v$.formData.$touch(); // Vuelidate checks form inputs

            if (this.v$.formData.$invalid) {
                console.log("Form is invalid");
                return;
            }

            try {
                // HTTP request to create a new user in the database
                const response = await axios.post(
                    "http://127.0.0.1:8001/api/register",
                    {
                        name: this.formData.name,
                        email: this.formData.email,
                        password: this.formData.password,
                    }
                );

                this.authStore.login(response.data); // Store the user with Pinia & localStorage

                this.$router.push("user"); // Redirect to user page when registered
            } catch (error) {
                if (error.response.status == 409) {
                    this.userExists = true; // Show error message if user already exists in database
                }
            }
        },

        toggleUserExists() {
            this.userExists = false;
        },
    },

    validations: {
        formData: {
            name: { required },
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
.link {
    cursor: pointer;
}
</style>
