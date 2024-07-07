<template>
    <ion-card>
        <ion-card-header>
            <ion-card-subtitle>Contact us</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>
            <ion-text class="ion-text-center" color="success" v-if="mailSent"
                >Votre mail a bien été envoyé</ion-text
            >
            <ion-list>
                <ion-item lines="full">
                    <ion-input
                        label="Name : "
                        label-placement="floating"
                        v-model.trim="formData.name"
                        required
                    ></ion-input>
                </ion-item>
                <span v-for="error in v$.formData.name.$errors">{{
                    error.$message
                }}</span>

                <ion-item>
                    <ion-input
                        label="Email : "
                        label-placement="floating"
                        v-model.trim="formData.email"
                        type="email"
                        required
                    />
                </ion-item>
                <span v-for="error in v$.formData.email.$errors">{{
                    error.$message
                }}</span>

                <ion-item>
                    <ion-input
                        label="Object : "
                        label-placement="floating"
                        v-model.trim="formData.object"
                        required
                    ></ion-input>
                </ion-item>
                <span v-for="error in v$.formData.object.$errors">{{
                    error.$message
                }}</span>

                <ion-item>
                    <ion-textarea
                        label="Message : "
                        label-placement="floating"
                        v-model.trim="formData.message"
                        required
                    ></ion-textarea>
                </ion-item>
                <span v-for="error in v$.formData.message.$errors">{{
                    error.$message
                }}</span>
            </ion-list>
            <ion-button expand="block" @click="submit">Submit</ion-button>
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
    IonText,
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

            mailSent: false,
        };
    },

    methods: {
        clearForm() {
            this.formData.name = "";
            this.formData.email = "";
            this.formData.object = "";
            this.formData.message = "";
        },

        async submit() {
            this.v$.formData.$touch(); // Vuelidate checks form inputs

            if (this.v$.formData.$invalid) {
                console.log("Form is invalid");
                return;
            }

            try {
                // HTTP request to send a mail to the app owner
                const response = await axios.post(
                    "http://127.0.0.1:8001/api/mail-contact",
                    {
                        name: this.formData.name,
                        email: this.formData.email,
                        object: this.formData.object,
                        message: this.formData.message,
                    }
                );

                // When mail is sent, reset form and show message
                this.mailSent = true;
                this.clearForm();
            } catch (error) {
                console.log(error);
            }
        },
    },

    // Validations rules for Vuelidate
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
        IonText,
    },
};
</script>

<style scoped>
span {
    color: red;
}
</style>
