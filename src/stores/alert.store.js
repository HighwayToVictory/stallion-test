import { defineStore } from 'pinia';


// alert store is used to store system alerts
export const useAlertStore = defineStore({
    id: 'alert',
    state: () => ({
        alert: null
    }),
    actions: {
        success(message) {
            this.alert = { message, type: 'alert-success' };
        },
        error(message) {
            this.alert = { message, type: 'alert-danger' };
        },
        warning(message) {
            this.alert = { message, type: 'alert-warning' };
        },
        clear() {
            this.alert = null;
        }
    }
});