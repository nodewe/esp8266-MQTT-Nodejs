import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.config.productionTip = false
// import VueMqtt from 'vue-mqtt'

// Vue.use(VueMqtt, 'mqtt://192.168.122.174:1883', {clientId: 'WebClient-' + parseInt(Math.random() * 100000)})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
