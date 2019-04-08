import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    chars : ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
    a:Math.random().toString(30).substr(2),
    userJurisdiction: "",
    workTime:""




},
  mutations: {},
  actions: {}
});
