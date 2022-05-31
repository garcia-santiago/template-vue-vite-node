import { defineStore } from "pinia";

export const userStore = defineStore("user", {
    state: () => {
        return {id: 0, nombre: "default", edad: 0};
    },
    actions: {
    },
    getters: {
        
    }
})