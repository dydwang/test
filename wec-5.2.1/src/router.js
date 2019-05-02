import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import download from "./views/download/download"

import learning from "./views/learning/learning"
import zhujian from "./views/learning/zhujian"
import yilai from "./views/learning/yilai"
import anzhuang from "./views/learning/anzhuang"
import jingyan from "./views/learning/jingyan"




import admin from "./views/admin/admin"
import adminDownload from "./views/admin/adminDownload"
import adminLearn from "./views/admin/adminLearn"



Vue.use(Router);

let routers = new Router({
  mode : 'hash',
  base: '/ttms/',
  scorllBehavior: () => ({

    y: 0
  }),
  routes: [
    { path: "/", redirect: "/home" },

    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/zhujian",
      name: "zhujian",
      component: zhujian
    },
    {
      path: "/yilai",
      name: "yilai",
      component: yilai
    },
    {
      path: "/anzhuang",
      name: "anzhuang",
      component: anzhuang
    },
    {
      path: "/jingyan",
      name: "jingyan",
      component: jingyan
    },
    {
      path: "/admin",
      name: "admin",
      component: admin,
      meta:{admin:true },   //需要权限
      children:[
        {
          path: "/adminDownload",
          name: "adminDownload",
          component: adminDownload,
          meta:{admin:true }
        },
        {
          path: "/adminLearn",
          name: "adminLearn",
          component: adminLearn,
          meta:{admin:true }
        }
      ]
    },
    {
      path: "/download",
      name: "download",
      component: download

    },
    {
      path: "/learning",
      name: "learning",
      component: learning

    },


  ]
});
routers.beforeEach((to, from, next) => {
  const user = sessionStorage.getItem("user");
    if (!user) {
      if(to.meta.admin|| to.name == null){
        console.log('没有登录+++++++++++++++++');
        next({path:"/home"})
      }
      else {
        next()
      }
      console.log('没有登录');
      //next.path({path:"/"})
    }

  else if (user) {
    next();
  }

})

export default routers


