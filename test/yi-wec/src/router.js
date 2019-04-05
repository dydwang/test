import Vue from "vue";
import Router from "vue-router";
import Home from "./views/home.vue";
import Menu from "./phone/main/menu.vue";
import myH from "./phone/main/myH.vue";
import newActive from "@/computer/newActive";
import pActive from "./phone/main/pActive";
import first from "./phone/main/first";
import tuijian from "./phone/main/tuijian";
import cjcg from "./phone/main/cjcg";

import computer from "@/computer/index";
Vue.use(Router);

export default new Router({
    mode : 'hash',
    base: '/ttms/',
    scorllBehavior: () => ({

        y: 0
    }),
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },

        {
            path: "/Menu",
            name: "menu",
            component:Menu,
            redirect:"/first",
            children:[{
                path: "/first",
                name: "first",
                component:first
            },
                {
                path: "/pActive",
                name: "pActive",
                component: pActive
            },
                {
                    path: "/myH",
                    name: "myH",
                    component: myH
                },
                {
                    path: "/tuijian",
                    name: "tuijian",
                    component: tuijian
                },
                {
                    path: "/cjcg",
                    name: "cjcg",
                    component: cjcg
                }
            ]
        },
        {
            path: "/newActive",
            name: "newActive",
            component: newActive
        },

        {
            path: "/computer",
            name: "computer",
            component: computer
        },

    ]
});
