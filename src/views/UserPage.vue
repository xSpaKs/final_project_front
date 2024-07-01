<template>
    <ion-page>
        <ion-content>
            <UserInfos :user="user" />
            <ModifyUserInfos />
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
    IonText,
} from "@ionic/vue";

import UserInfos from "../components/UserInfos.vue";
import ModifyUserInfos from "../components/ModifyUserInfos.vue";

export default {
    data() {
        return {
            user: {},
        };
    },

    mounted() {
        const user = JSON.parse(localStorage.getItem("user"));
        console.log(user);
        if (!user) {
            this.$router.push("login");
        }

        this.user = user;
    },

    components: {
        IonPage,
        IonContent,
        IonCard,
        IonCardHeader,
        IonCardTitle,
        IonText,
        UserInfos,
        ModifyUserInfos,
    },
};
</script>
