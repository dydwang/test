import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import Vant from 'vant';
import 'vant/lib/index.css';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import headTitle from "@/computer/headTitle"
Vue.use(headTitle)

import phone from "@/phone/main/menu"
Vue.use(phone)

import computer from "./computer/index"
Vue.use(computer)

import condition from "@/computer/components/condition"
Vue.use(condition)

import pcondition from "@/phone/component/pcondition"
Vue.use(pcondition)

import photo from "@/phone/component/photo"
Vue.use(photo)

import zouMa from  "@/phone/main/zouMa"
Vue.use(zouMa)

import active from  "@/phone/main/active"
Vue.use(active)



import "./mock/index";
import axios from 'axios';
Vue.prototype.$ajax= axios;
Vue.use(Vant);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
