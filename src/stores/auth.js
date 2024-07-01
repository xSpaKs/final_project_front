import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
    state: () => ({}),
    actions: {
        isUserAuthenticated() {
            return JSON.parse(localStorage.getItem("user")) != null;
        },

        getUser() {
            return JSON.parse(localStorage.getItem("user"));
        },
    },
});
