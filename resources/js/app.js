import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import ExampleComponent from "../components/ExampleComponent.vue";
import AboutComponent from "../components/AboutComponent.vue";
import App from "./App.vue"; // Import the App component

const routes = [
    { path: "/", component: ExampleComponent },
    { path: "/about", component: AboutComponent },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

createApp(App).use(router).mount("#app");
