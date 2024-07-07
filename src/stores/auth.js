import { defineStore } from "pinia";
import { ref } from "vue";

export const useAuthStore = defineStore("auth", () => {
    const user = ref({});
    const isAuthenticated = ref(false);

    function loadUserFromLocalStorage() {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            user.value = JSON.parse(storedUser);
            isAuthenticated.value = true;
        }
    }

    function login(userData) {
        user.value = userData;
        isAuthenticated.value = true;
        localStorage.setItem("user", JSON.stringify(userData));
    }

    function logout() {
        user.value = {};
        isAuthenticated.value = false;
        localStorage.removeItem("user");
    }

    function update(userData) {
        user.value = userData;
        localStorage.setItem("user", JSON.stringify(userData));
    }

    return {
        user,
        isAuthenticated,
        login,
        logout,
        update,
        loadUserFromLocalStorage,
    };
});
