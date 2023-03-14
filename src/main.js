import { createApp } from "vue";
import App from "./App.vue";
import "./assets/css/main.scss";
import "virtual:svg-icons-register";
import VueGoogleMaps from "@fawmi/vue-google-maps";

createApp(App).mount("#app");
const app = createApp(App);
app
  .use(VueGoogleMaps, {
    load: {
      key: "AIzaSyDNzk22YYzqhtw8S_rcrO4sn7Gbc70_j-M",
      language: "ru",
    },
  })
  .mount("#app");
