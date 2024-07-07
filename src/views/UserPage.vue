<template>
    <ion-page>
        <ion-content>
            <UserInfos />
            <UserSubscriptions />
            <ModifyUserInfos />
            <DeleteAccount />
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
import UserSubscriptions from "../components/UserSubscriptions.vue";
import DeleteAccount from "../components/DeleteAccount.vue";

export default {
    // If user is not logged in, redirect to login page
    beforeRouteEnter(to, from, next) {
        if (!JSON.parse(localStorage.getItem("user"))) {
            next("/login");
        } else {
            next();
        }
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
        UserSubscriptions,
        DeleteAccount,
    },
};
</script>
