import ExampleComponent from "./components/ExampleComponent";
import VueRouter from "vue-router";

const routes = [
    {
        path: "/",
        component: ExampleComponent,
        name: "Home"
    }
];

const router = new VueRouter({
    routes,
})

export default router;
