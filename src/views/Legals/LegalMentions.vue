<template>
    <ion-page>
        <ion-content>
            <ion-card>
                <ion-card-header>
                    <ion-card-subtitle>Editor of the website</ion-card-subtitle>
                </ion-card-header>
                <ion-card-content>
                    <ion-list>
                        <ion-item>
                            <ion-label class="ion-text-nowrap"
                                >Name :</ion-label
                            >
                            <ion-label class="ion-text-end"
                                >Aran Hiblot</ion-label
                            >
                        </ion-item>
                        <ion-item>
                            <ion-label class="ion-text-nowrap"
                                >Adress :
                            </ion-label>
                            <ion-label class="ion-text-end"
                                >19 rue Yves Toudic, 75011 Paris,
                                France</ion-label
                            >
                        </ion-item>
                        <ion-item>
                            <ion-label class="ion-text-nowrap"
                                >Phone number :</ion-label
                            >
                            <ion-label class="ion-text-end"
                                >01 42 41 97 76</ion-label
                            >
                        </ion-item>
                        <ion-item lines="none">
                            <ion-label class="ion-text-nowrap"
                                >Mail :</ion-label
                            >
                            <ion-label class="ion-text-end"
                                >contact@ecole-webstart.com</ion-label
                            >
                        </ion-item>
                    </ion-list>
                </ion-card-content>
            </ion-card>
            <ion-card>
                <ion-card-header>
                    <ion-card-subtitle>Host of the website</ion-card-subtitle>
                </ion-card-header>
                <ion-card-content>
                    <ion-list>
                        <ion-item>
                            <ion-label class="ion-text-nowrap"
                                >Host name :</ion-label
                            >
                            <ion-label class="ion-text-end"
                                >Windows & Linux</ion-label
                            >
                        </ion-item>
                        <ion-item>
                            <ion-label class="ion-text-nowrap"
                                >Adress :
                            </ion-label>
                            <ion-label class="ion-text-end"
                                >19 rue Yves Toudic, 75011 Paris,
                                France</ion-label
                            >
                        </ion-item>
                        <ion-item lines="none">
                            <ion-label class="ion-text-nowrap"
                                >Phone number :</ion-label
                            >
                            <ion-label class="ion-text-end"
                                >01 42 41 97 76</ion-label
                            >
                        </ion-item>
                    </ion-list>
                </ion-card-content>
            </ion-card>
            <ion-card>
                <ion-card-header>
                    <ion-card-subtitle
                        >Director of publication</ion-card-subtitle
                    >
                </ion-card-header>
                <ion-card-content>
                    <ion-list>
                        <ion-item lines="none">
                            <ion-label class="ion-text-nowrap"
                                >Director name :</ion-label
                            >
                            <ion-label class="ion-text-end">Webstart</ion-label>
                        </ion-item>
                    </ion-list>
                </ion-card-content>
            </ion-card>
            <ion-card>
                <ion-card-header>
                    <ion-card-subtitle>Legal informations</ion-card-subtitle>
                </ion-card-header>
                <ion-card-content>
                    <ion-list>
                        <ion-item>
                            <ion-label class="ion-text-nowrap"
                                >Legal status :</ion-label
                            >
                            <ion-label class="ion-text-end">Webstart</ion-label>
                        </ion-item>
                        <ion-item>
                            <ion-label class="ion-text-nowrap"
                                >Social capital :</ion-label
                            >
                            <ion-label class="ion-text-end"
                                >5000.00 €</ion-label
                            >
                        </ion-item>
                        <ion-item lines="none">
                            <ion-label class="ion-text-nowrap">RCS :</ion-label>
                            <ion-label class="ion-text-end"
                                >812 509 073 R.C.S. Paris</ion-label
                            >
                        </ion-item>
                    </ion-list>
                </ion-card-content>
            </ion-card>
            <ion-card>
                <ion-card-header>
                    <ion-card-subtitle
                        >Personal data protection</ion-card-subtitle
                    >
                </ion-card-header>
                <ion-card-content>
                    <ion-list>
                        <ion-item lines="none">
                            <ion-label
                                >Your personal data is protected. Passwords are
                                encrypted and Stripe protects your bank
                                informations.</ion-label
                            >
                        </ion-item>
                    </ion-list>
                </ion-card-content>
            </ion-card>
            <ion-card>
                <ion-card-header>
                    <ion-card-subtitle>Cookies</ion-card-subtitle>
                </ion-card-header>
                <ion-card-content>
                    <ion-list>
                        <ion-item lines="none">
                            <ion-label
                                >There is no cookie on this website as it is a
                                student project still in development.</ion-label
                            >
                        </ion-item>
                    </ion-list>
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
    IonList,
    IonItem,
    IonLabel,
} from "@ionic/vue";

export default {
    components: {
        IonPage,
        IonContent,
        IonCard,
        IonCardHeader,
        IonCardSubtitle,
        IonCardContent,
        IonList,
        IonItem,
        IonLabel,
    },
};
</script>
