<template>
    <ion-card>
        <ion-card-header>
            <ion-card-subtitle>Modify user infos</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>
            <ion-list>
                <ion-item>
                    <ion-input
                        label="Name : "
                        label-placement="floating"
                        v-model.trim="formData.name"
                    />
                </ion-item>

                <ion-item>
                    <ion-input
                        label="Email : "
                        label-placement="floating"
                        v-model.trim="formData.email"
                        type="email"
                    />
                </ion-item>

                <ion-item>
                    <ion-input
                        type="password"
                        label="Password : "
                        label-placement="floating"
                        v-model.trim="formData.password"
                        ><ion-input-password-toggle
                            slot="end"
                        ></ion-input-password-toggle
                    ></ion-input>
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
    IonInputPasswordToggle,
    IonTextarea,
    IonButton,
} from "@ionic/vue";

import axios from "axios";

import { useVuelidate } from "@vuelidate/core";
import { email, minLength } from "@vuelidate/validators";

export default {
    setup: () => ({ v$: useVuelidate() }),

    data() {
        return {
            formData: {
                name: "",
                email: "",
                password: "",
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

            try {
                const response = await axios.post(
                    "http://127.0.0.1:8001/api/modify-user",
                    {
                        id: JSON.parse(localStorage.getItem("user")).id,
                        name: this.formData.name,
                        email: this.formData.email,
                        password: this.formData.password,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${
                                JSON.parse(localStorage.getItem("user")).token
                            }`,
                        },
                    }
                );

                // Store the updated user with localStorage
                localStorage.setItem("user", JSON.stringify(response.data));

                console.log(response.data);
            } catch (error) {
                console.log(error);
            }
        },
    },

    validations: {
        formData: {
            name: {},
            email: { email },
            password: { minLength: minLength(8) },
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
        IonInputPasswordToggle,
        IonTextarea,
        IonButton,
    },
};
</script>

<style scoped>
ion-item {
    display: flex;
    flex-direction: column;
}

small {
    color: red;
}
</style>
