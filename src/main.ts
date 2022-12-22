import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

createApp(App).use(router).mount("#app");
