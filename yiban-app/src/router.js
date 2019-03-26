import Vue from "vue";
import Router from "vue-router";
import Home from "./views/home.vue";
import HeadBox from "./phone/components/header/Header.vue";
import Menu from "./phone/components/main/menu.vue";
import newActive from "@/computer/newActive";
import pActive from "./phone/components/main/pActive";
Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/HeadBox",
            name: "header",
            component:HeadBox
        },
        {
            path: "/Menu",
            name: "menu",
            component:Menu
        },
        {
            path: "/newActive",
            name: "newActive",
            component: newActive
        }, {
            path: "/pActive",
            name: "pActive",
            component: pActive
        },

    ]
});
