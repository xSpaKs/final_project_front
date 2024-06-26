<template>
    <ion-card>
        <ion-card-header>
            <ion-card-subtitle>Contact Form</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>
            <ion-list>
                <ion-item>
                    <ion-label>Name</ion-label>
                    <ion-input
                        v-model.trim="formData.name"
                        required
                    ></ion-input>
                </ion-item>

                <ion-item>
                    <ion-label>Email</ion-label>
                    <ion-input
                        v-model.trim="formData.email"
                        type="email"
                        required
                    />
                </ion-item>

                <ion-item>
                    <ion-label>Object</ion-label>
                    <ion-input v-model.trim="formData.object"></ion-input>
                </ion-item>

                <ion-item>
                    <ion-label>Message</ion-label>
                    <ion-textarea
                        v-model.trim="formData.message"
                        required
                    ></ion-textarea>
                </ion-item>
            </ion-list>
            <ion-button expand="full" @click="submit">Submit</ion-button>
        </ion-card-content>
    </ion-card>
</template>

<script>
import {
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonCardTitle,
    IonCardSubtitle,
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonTextarea,
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
                name: "",
                email: "",
                object: "",
                message: "",
            },
        };
    },

    methods: {
        async submit() {
            this.v$.formData.$touch();

            if (this.v$.formData.$invalid) {
                console.log("Form is invalid");
                return;
            }

            let response;
            try {
                response = await axios.post(
                    "http://127.0.0.1:8001/api/mail-contact",
                    {
                        name: this.formData.name,
                        email: this.formData.email,
                        object: this.formData.object,
                        message: this.formData.message,
                    }
                );
            } catch (error) {
                console.log(error);
            }
        },
    },

    validations: {
        formData: {
            name: { required },
            email: { required, email },
            object: { required },
            message: { required, minLength: minLength(50) },
        },
    },

    components: {
        IonCard,
        IonCardHeader,
        IonCardContent,
        IonCardTitle,
        IonCardSubtitle,
        IonList,
        IonItem,
        IonLabel,
        IonInput,
        IonTextarea,
        IonButton,
    },
};
</script>
