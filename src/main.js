import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

Vue.prototype.$bus = new Vue();   //事件总线
Vue.config.productionTip = false;

Vue.use(Antd);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
