import App from './App.vue'
import Vue from 'vue'
import VueRouter from 'vue-router';
import ElementUI from 'element-ui'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import InfoPage from './infopage/index'
import Login from './Login/index'
import store from './store/store'
import vuetify from '@/plugins/vuetify' 

Vue.use(VueRouter);
Vue.use(iView);
Vue.use(ElementUI)
const routes = [
  {path: '/infopage',component : InfoPage},
  {path : '/',component : Login}
];

const router = new VueRouter ({
  routes
})

Vue.config.productionTip = false
Vue.use(iView)
Vue.use(ElementUI)
/* eslint-disable no-new*/
/* eslint-disable no-new */
/* eslint-disable */
new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
