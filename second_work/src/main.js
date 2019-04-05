import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./computer/mock/index";
import axios from "axios";
Vue.prototype.$ajax= axios;

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import rightNav from "./computer/user/components/index"
Vue.use(rightNav)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount("#app");
