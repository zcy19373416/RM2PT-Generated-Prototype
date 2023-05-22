import Vue from "vue";
import router from "./router.js";
import store from "./store.js";
import axios from "axios";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./tailwind.css";

axios.defaults.baseURL = "/api";
Vue.prototype.$axios = axios;
Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: h => h("router-view"),
}).$mount("#app");